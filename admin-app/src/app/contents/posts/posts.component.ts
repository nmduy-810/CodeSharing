import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';

interface DataItem {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  postsColumn = [
    {
      title: 'ID',
      compare: (a: Post, b: Post) => a.id - b.id,
    },
    {
      title: 'Title',
      compare: (a: Post, b: Post) => a.title.localeCompare(b.title)
    },
    {
      title: 'Category',
      compare: (a: Post, b: Post) => a.categoryTitle.localeCompare(b.categoryTitle)
    },
    {
      title: ''
    }
  ]

  subscription = new Subscription();
  selectedCategory: string;
  selectedStatus: string;
  searchInput: any;
  displayData = [];
  posts$: any;

  constructor(
    private tableSvc: TableService, 
    private postsService: PostsService,
    private router: Router) {
      this.get();
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get() {
    this.subscription.add(this.postsService.get().subscribe((res: any) => {
      this.displayData = this.posts$ = res;
      console.log(res);
    }));
  }

  search(): void {
    const data = this.posts$;
    this.displayData = this.tableSvc.search(this.searchInput, data)
  }

  categoryChange(value: string): void {
    const data = this.posts$;
    value !== 'All' ? this.displayData = data.filter(elm => elm.category === value) : this.displayData = data
  }

  statusChange(value: string): void {
    const data = this.posts$;
    value !== 'All' ? this.displayData = data.filter(elm => elm.status === value) : this.displayData = data
  }

  add() {
    this.router.navigateByUrl('/contents/posts-detail/');
  }

  update() {
    
  }
}
