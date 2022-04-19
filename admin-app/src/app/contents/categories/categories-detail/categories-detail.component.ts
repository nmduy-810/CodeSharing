import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit, OnDestroy  {

  isVisible = false;
  isConfirmLoading = false;
  isParentChecked: boolean = false;
  categories$: any;
  subscription = new Subscription();
  updateData: any;
  categoryId: any;

  categoryForm = this.fb.group({
    parentCategoryId: new FormControl(null),
    title: new FormControl('', Validators.compose([Validators.required])),
    slug: new FormControl('', Validators.compose([Validators.required])),
    sortOrder: new FormControl('', Validators.compose([Validators.required])),
    isParent: new FormControl(false)
  });

  constructor(
    private categoriesService: CategoriesService, 
    private utilitiesService: UtilitiesService,
    private fb: FormBuilder) {}

  @ViewChild('content') childView !: ElementRef
  ngOnInit(): void {
    this.get();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cancel(): void {
    this.isVisible = false;
  }

  open() {
    this.clearForm();
    this.isVisible = true;
  }

  get() {
    this.categoriesService.get().subscribe((data) => {
      this.categories$ = data;
    });
  }

  update(id: any) {
    this.categoriesService.getById(id).subscribe(result => {
      this.updateData = result;
      this.categoryForm.setValue({
        parentCategoryId: this.updateData.parentCategoryId,
        title: this.updateData.title,
        slug: this.updateData.slug,
        sortOrder: this.updateData.sortOrder,
        isParent: this.updateData.isParent
      })
    });

    this.categoryId = id;
    this.open();
  }

  save() {
    this.isConfirmLoading = true;
    if (this.categoryForm.valid) {
      if(this.categoryId == null) {
        this.subscription.add(this.categoriesService.add(this.categoryForm.getRawValue())
        .subscribe(() => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }, error => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }))
      } else {
        this.subscription.add(this.categoriesService.update(this.categoryId, this.categoryForm.getRawValue())
        .subscribe(() => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }, error => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }))
      }
    }
    else {
      Object.values(this.categoryForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.isConfirmLoading = false;
        }
      });
    }
  }

  generateSlug() {
    const seoAlias = this.utilitiesService.MakeSeoTitle(this.categoryForm.controls['title'].value);
    this.categoryForm.controls['slug'].setValue(seoAlias);
  }

  clearForm() {
    this.categoryForm.setValue({
      parentCategoryId: null,
      title: '',
      slug: '',
      sortOrder: 0,
      isParent: false
    })
  }

  checkParent() {
    this.isParentChecked = !this.isParentChecked;
  }
}
