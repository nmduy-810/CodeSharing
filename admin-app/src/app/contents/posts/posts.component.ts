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
      title: 'Danh mục',
      compare: (a: Post, b: Post) => a.categoryTitle.localeCompare(b.categoryTitle)
    },
    {
      title: 'Tiêu đề',
      compare: (a: Post, b: Post) => a.title.localeCompare(b.title)
    },
    {
      title: 'Ngày tạo',
      compare: (a: Post, b: Post) => a.title.localeCompare(b.title)
    },
    {
      title: 'Bình luận',
      compare: (a: Post, b: Post) => a.categoryTitle.localeCompare(b.title)
    },
    {
      title: 'Lượt thích',
      compare: (a: Post, b: Post) => a.title.localeCompare(b.title)
    },
    {
      title: 'Số người xem',
      compare: (a: Post, b: Post) => a.title.localeCompare(b.title)
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
      nzTitle: 'Bạn có muốn xoá bài viết này?',
      nzContent: '<b style="color: red;">Bạn không thể hoàn tác hành động này!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'No',
      nzOnOk: () => {
        return this.postsService.delete(id).subscribe(result => {
          this.get();
          this.notification.create('success', 'Xác nhận', 'Bài viết đã được xoá thành công!');
        });
      }
    });
  }
}
