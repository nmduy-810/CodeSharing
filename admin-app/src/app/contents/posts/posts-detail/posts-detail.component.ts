import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
import { PostsService, CategoriesService } from 'src/app/shared/services';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Category } from 'src/app/shared/models';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  postForm: FormGroup;
  categories$: any;
  Editor = ClassicEditor;

  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png'
    }
  ];
  
  constructor(
    private postsService: PostsService, 
    private utilitiesService: UtilitiesService, 
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private msg: NzMessageService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.subscription.push(this.categoriesService.get()
      .subscribe((response: Category[]) => {
        this.categories$ = response;
      }));

    this.postForm = this.fb.group({
      'categoryId': new FormControl('', Validators.compose([Validators.required])),
      'title': new FormControl('', Validators.compose([Validators.required])),
      'slug': new FormControl('', Validators.compose([Validators.required])),
      'content': new FormControl(''),
      'labels': new FormControl(''),
    });

    if (id) {
      this.getById(id);
    }
  }

  getById(id:any) {
    this.subscription.push(this.postsService.getById(id).subscribe((response: any) => { 
      console.log(response);
      this.postForm.setValue({
        'categoryId': response.categoryId,
        'title': response.title,
        'slug': response.slug,
        'content': response.content,
        'labels': response.labels,
      });
    }));
  }

  generateSeoAlias() {
    const seoAlias = this.utilitiesService.MakeSeoTitle(this.postForm.controls['title'].value);
    this.postForm.controls['slug'].setValue(seoAlias);
  }

  save() {

  }

  reset(e: MouseEvent): void {
    e.preventDefault();
    this.postForm.reset();
    for (const key in this.postForm.controls) {
      this.postForm.controls[key].markAsPristine();
      this.postForm.controls[key].updateValueAndValidity();
    }
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }
}
