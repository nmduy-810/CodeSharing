import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {

  selectedCountry: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
