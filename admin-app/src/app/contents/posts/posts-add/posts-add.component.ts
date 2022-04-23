import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/shared/models';
import { CategoriesService, PostsService } from 'src/app/shared/services';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css']
})
export class PostsAddComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  postForm: FormGroup;
  categories$: any;
  Editor = ClassicEditor;

  constructor(
    private postsService: PostsService,
    private utilitiesService: UtilitiesService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      'categoryId': new FormControl('', Validators.compose([Validators.required])),
      'title': new FormControl('', Validators.compose([Validators.required])),
      'slug': new FormControl('', Validators.compose([Validators.required])),
      'content': new FormControl(''),
      'coverImage': new FormControl(''),
      'coverImageSource': new FormControl(''),
      'labels': new FormControl(''),
      'note': new FormControl('')
    });

    this.subscription.push(this.categoriesService.get()
      .subscribe((response: Category[]) => {
        this.categories$ = response;
      }));
  }

  generateSeoAlias() {
    const seoAlias = this.utilitiesService.MakeSeoTitle(this.postForm.controls['title'].value);
    this.postForm.controls['slug'].setValue(seoAlias);
  }

  save() {
    const formValues = this.postForm.getRawValue();
    const formData = this.utilitiesService.ToFormData(formValues);
    formData.append('coverImage', this.postForm.get('coverImageSource')?.value);
    this.subscription.push(this.postsService.add(formData).subscribe((response: any) => {
      console.log(response);
      if (response.status === 201) {
        this.notification.create('success', 'Confirm', 'Insert new post successfully!');
        this.router.navigateByUrl('/contents/posts');
      }
    }));
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
