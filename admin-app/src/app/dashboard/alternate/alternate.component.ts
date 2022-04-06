import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ['./alternate.component.scss']
})
export class AlternateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/alternate-dashboard.js")

  }

}
