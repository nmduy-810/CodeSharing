import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService, UtilitiesService } from 'src/app/shared/services';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit, OnDestroy {

  isVisible = false;
  isConfirmLoading = false;
  user$: any;
  subscription = new Subscription();
  updateData: any;
  userId: any;

  userForm = this.fb.group({
    id: new FormControl(''),

    userName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(255),
      Validators.minLength(3)
    ])),

    firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(255),
        Validators.minLength(3)
    ])),

    lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(255),
        Validators.minLength(3)
    ])),
    
    password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(255),
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ])),

    email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),

    phoneNumber: new FormControl(),

    birthday: new FormControl()
    
  });

  constructor(private fb: FormBuilder, private utilitiesService: UtilitiesService, private usersService: UserService) { }

  @ViewChild('content') childView !: ElementRef
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.usersService.get().subscribe((data) => {
      this.user$ = data;
    });
  }

  open() {
    this.isVisible = true;
  }

  cancel(): void {
    this.isVisible = false;
  }

  update(id: any) {
    this.usersService.getDetail(id)
      .subscribe((response: any) => {
        const birthday: Date = new Date(response.birthday);
        this.userForm.setValue({
          id: response.id,
          firstName: response.firstName,
          lastName: response.lastName,
          userName: response.userName,
          email: response.email,
          password: '',
          phoneNumber: response.phoneNumber,
          birthday: birthday
        });
      });

      this.userId = id;
      this.open();
  }

  save() {
    this.isConfirmLoading = true;
    if (this.userForm.valid) {
      if(this.userId == null) {
        this.subscription.add(this.usersService.add(this.userForm.getRawValue())
        .subscribe(() => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }, error => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }))
      } else {
        this.subscription.add(this.usersService.update(this.userId, this.userForm.getRawValue())
        .subscribe(() => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }, error => {
          setTimeout(() => { this.isVisible = false; this.isConfirmLoading = false; }, 1000);
        }))
      }
    }
    else {
      Object.values(this.userForm.controls).forEach(control => {
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
