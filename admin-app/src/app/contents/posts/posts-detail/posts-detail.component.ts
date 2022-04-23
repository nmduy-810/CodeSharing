import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService, CategoriesService } from 'src/app/shared/services';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Category } from 'src/app/shared/models';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  categories$: any;
  postForm: FormGroup;
  Editor = ClassicEditor;
  postId: any;

  constructor(
    private postsService: PostsService,
    private utilitiesService: UtilitiesService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postForm = this.fb.group({
      'categoryId': new FormControl('', Validators.compose([Validators.required])),
      'title': new FormControl('', Validators.compose([Validators.required])),
      'slug': new FormControl('', Validators.compose([Validators.required])),
      'content': new FormControl('', Validators.compose([Validators.required])),
      'coverImage': new FormControl('', Validators.compose([Validators.required])),
      'coverImageSource': new FormControl(''),
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
      this.postForm.setValue({
        'categoryId': response.categoryId,
        'title': response.title,
        'slug': response.slug,
        'content': response.content,
        'coverImage': '',
        'coverImageSource': '',
        'labels': response.labels,
        'note': response.note
      });
    }));
  }

  generateSeoAlias() {
    const seoAlias = this.utilitiesService.MakeSeoTitle(this.postForm.controls['title'].value);
    this.postForm.controls['slug'].setValue(seoAlias);
  }

  save() {
    if (this.postForm.valid) {
      const formValues = this.postForm.getRawValue();
      const formData = this.utilitiesService.ToFormData(formValues);

      formData.append('coverImage', this.postForm.get('coverImageSource')?.value);

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
      this.postForm.patchValue({
        coverImageSource: file
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }
}
