import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService, CategoriesService } from 'src/app/shared/services';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import * as CustomEdtior from '../../../ckCustomBuild/build/ckeditor';
import { Category } from 'src/app/shared/models';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { LabelsService } from 'src/app/shared/services/labels.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  categories$: any;
  postForm: FormGroup;
  Editor = CustomEdtior;
  postId: any;

  suggestions: string[] = [];
  tagList: string[] = [];
  tags = [];
  labels: any;

  selectedFile: File;
  imagePath: string;

  constructor(
    private postsService: PostsService,
    private utilitiesService: UtilitiesService,
    private categoriesService: CategoriesService,
    private labelsService: LabelsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTags();
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postForm = this.fb.group({
      'categoryId': new FormControl('', Validators.compose([Validators.required])),
      'title': new FormControl('', Validators.compose([Validators.required])),
      'summary': new FormControl('', Validators.compose([Validators.required])),
      'slug': new FormControl('', Validators.compose([Validators.required])),
      'content': new FormControl('', Validators.compose([Validators.required])),
      'labels': new FormControl('', Validators.compose([Validators.required])),
      'note': new FormControl('', Validators.compose([Validators.required]))
    });

    this.subscription.push(this.categoriesService.get()
      .subscribe((response: Category[]) => {
        this.categories$ = response;
      }));

    if (id) {
      this.getById(id);
      this.postId = id;
    }
  }

  getById(id: any) {
    this.subscription.push(this.postsService.getById(id).subscribe((response: any) => {
      console.log(response);
      response.labels.forEach(element => {
        this.tagList.push("#" + element);
      });

      this.labels = this.tagList.join(' ');

      this.postForm.setValue({
        'categoryId': response.categoryId,
        'title': response.title,
        'summary': response.summary,
        'slug': response.slug,
        'content': response.content,
        'labels': this.labels,
        'note': response.note
      });

      this.imagePath = response.coverImage;
      this.postForm.get('categoryId').setValue(response.categoryId.toString());
    }));
  }

  generateSeoAlias() {
    const seoAlias = this.utilitiesService.MakeSeoTitle(this.postForm.controls['title'].value);
    this.postForm.controls['slug'].setValue(seoAlias);
  }

  getTags() {
    this.subscription.push(this.labelsService.get().subscribe((response: any) => {
      response.forEach((element: { id: string; }) => {
        this.tags.push(element.id);
      });
    }))
  }

  save() {
    if (this.postForm.valid) {
      const formValues = this.postForm.getRawValue();
      const formData = this.utilitiesService.ToFormData(formValues);

      formData.append('coverImage', this.selectedFile);

      this.subscription.push(this.postsService.update(this.postId, formData).subscribe((response: any) => {
        console.log(response);
        if (response.status === 204) {
          this.notification.create('success', 'Confirm', 'Update post successfully!');
          this.router.navigateByUrl('/contents/posts');
        }
      }));
    }
    else {
      Object.values(this.postForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  reset(e: MouseEvent): void {
    e.preventDefault();
    this.postForm.reset();
    for (const key in this.postForm.controls) {
      this.postForm.controls[key].markAsPristine();
      this.postForm.controls[key].updateValueAndValidity();
    }
  }

  handleChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
    }
  }

  onReady($event) {
    $event.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    console.log('nzOnSearchChange', value, prefix);
    this.suggestions =  this.tags;
  }
}

class MyUploadAdapter {
  xhr: any;
  loader: any;
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        this._initRequest();
        this._initListeners(resolve, reject, file);
        this._sendRequest(file);
      }));
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {
    const xhr = this.xhr = new XMLHttpRequest();

    // Note that your request may look different. It is up to you and your editor
    // integration to choose the right communication channel. This example uses
    // a POST request with JSON as a data structure but your configuration
    // could be different.
    //Replace below url with your API url
    xhr.open('POST', 'https://localhost:5000/api/uploads/UploadImage', true);
    xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const response = xhr.response;

      // This example assumes the XHR server's "response" object will come with
      // an "error" which has its own "message" that can be passed to reject()
      // in the upload promise.
      //
      // Your integration may handle upload errors in a different way so make sure
      // it is done properly. The reject() function must be called when the upload fails.
      if (!response || response.error) {
        return reject(response && response.error ? response.error.message : genericErrorText);
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      // This URL will be used to display the image in the content. Learn more in the
      // UploadAdapter#upload documentation.
      resolve({
        default: response.url
      });
    });

    // Upload progress when it is supported. The file loader has the #uploadTotal and #uploaded
    // properties which are used e.g. to display the upload progress bar in the editor
    // user interface.
    if (xhr.upload) {
      xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    // Prepare the form data.
    const data = new FormData();

    data.append('upload', file);

    // Important note: This is the right place to implement security mechanisms
    // like authentication and CSRF protection. For instance, you can use
    // XMLHttpRequest.setRequestHeader() to set the request headers containing
    // the CSRF token generated earlier by your application.

    // Send the request.
    this.xhr.send(data);
  }
}