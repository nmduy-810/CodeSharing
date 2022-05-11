import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AboutsService } from 'src/app/shared/services/about.service';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import * as CustomEdtior from '../../../ckCustomBuild/build/ckeditor';

@Component({
  selector: 'app-abouts-detail',
  templateUrl: './abouts-detail.component.html',
  styleUrls: ['./abouts-detail.component.css']
})
export class AboutsDetailComponent implements OnInit, OnDestroy {

  isVisible = false;
  isConfirmLoading = false;
  Editor = CustomEdtior;
  subscription = new Subscription();
  about$: any;
  aboutId: any;
  updateData: any;
  selectedFile: File;
  imagePath: string;

  aboutForm = this.fb.group({
    description: new FormControl('', Validators.compose([Validators.required])),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aboutsService: AboutsService,
    private utilitiesService: UtilitiesService,) { }
  
  @ViewChild('content') childView !: ElementRef
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.aboutsService.get().subscribe((data) => {
      this.about$ = data;
    });
  }

  update(id: any) {
    this.aboutsService.getById(id).subscribe(result => {
      this.updateData = result;
      this.aboutForm.setValue({
        description: result.description
      })

      this.imagePath = result.image;
    });

    this.aboutId = id;
    this.open();
  }

  save() {
    this.isConfirmLoading = true;
    if (this.aboutForm.valid) {
      if(this.aboutId == null) {

        const formValues = this.aboutForm.getRawValue();
        const formData = this.utilitiesService.ToFormData(formValues);
        formData.append('image', this.selectedFile);

        this.subscription.add(this.aboutsService.add(formData)
        .subscribe(() => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }, error => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }))
      } else {

        const formValues = this.aboutForm.getRawValue();
        const formData = this.utilitiesService.ToFormData(formValues);
        formData.append('image', this.selectedFile);

        this.subscription.add(this.aboutsService.update(this.aboutId, formData)
        .subscribe(() => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }, error => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }))
      }
    }
    else {
      Object.values(this.aboutForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.isConfirmLoading = false;
        }
      });
    }
  }

  open() {
    this.isVisible = true;
  }

  cancel(): void {
    this.isVisible = false;
  }

  handleChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}