import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactsService } from 'src/app/shared/services';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit, OnDestroy {

  isVisible = false;
  isConfirmLoading = false;
  contacts$: any;
  subscription = new Subscription();
  updateData: any;
  contactId: any;

  contactForm = this.fb.group({
    phone: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    location: new FormControl('', Validators.compose([Validators.required])),
  });

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService) { }

  @ViewChild('content') childView !: ElementRef
  ngOnInit(): void {
    this.get();
  }

  cancel(): void {
    this.isVisible = false;
  }

  open() {
    this.clearForm();
    this.isVisible = true;
  }

  get() {
    this.contactsService.get().subscribe((data) => {
      this.contacts$ = data;
    });
  }

  clearForm() {
    this.contactForm.setValue({
      phone: '',
      email: '',
      location: '',
    })
  }

  update(id: any) {
    this.contactsService.getById(id).subscribe(result => {
      this.updateData = result;
      this.contactForm.setValue({
        phone: this.updateData.phone,
        email: this.updateData.email,
        location: this.updateData.location,
      })
    });

    this.contactId = id;
    this.open();
  }

  save() {
    this.isConfirmLoading = true;
    if (this.contactForm.valid) {
      this.subscription.add(this.contactsService.update(this.contactId, this.contactForm.getRawValue())
        .subscribe(() => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }, error => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }))
    }
    else {
      Object.values(this.contactForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.isConfirmLoading = false;
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
