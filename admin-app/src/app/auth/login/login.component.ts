import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login() {
    this.spinner.show();
    this.authService.login();
  }
}