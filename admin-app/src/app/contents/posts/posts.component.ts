import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';

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
   selectedItems = [];

  constructor(
    private tableSvc: TableService, 
    private postsService: PostsService,
    private router: Router,
    private modalService: NzModalService,
    private notification: NzNotificationService) {
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

  update(id:any) {
    this.router.navigateByUrl('/contents/posts/' + id);
  }

  delete(id:any) {
    this.modalService.confirm({
      nzTitle: 'Are you sure delete this post?',
      nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'No',
      nzOnOk: () => {
        return this.postsService.delete(id).subscribe(result => {
          this.get();
          this.notification.create('success', 'Confirm', 'Delet post successfully!');
        });
      }
    });
  }
}
