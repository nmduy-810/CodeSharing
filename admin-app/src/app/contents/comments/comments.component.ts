import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/shared/models';
import { CommentsService } from 'src/app/shared/services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  subscription = new Subscription();
  displayData = [];
  
  commentsColumn = [
    {
      title: 'Nội dung bình luận',
      compare: (a: Comment, b: Comment) => a.content.localeCompare(b.content)
    },
    {
      title: 'Ngưòi đăng',
      compare: (a: Comment, b: Comment) => a.ownerName.localeCompare(b.ownerName)
    },
    {
      title: 'Mã bài viết',
    },
    {
      title: 'Ngày tạo',
      compare: (a: Comment, b: Comment) => a.createDate.localeCompare(b.createDate)
    },
    {
      title: ''
    }
  ]

  constructor(
    private commentService: CommentsService,
    private modalService: NzModalService,
    private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.subscription.add(this.commentService.get().subscribe((res: any) => {
      this.displayData = res;
      console.log(this.displayData);
    }));
  }

  delete(postId, id:any) {
    this.modalService.confirm({
      nzTitle: 'Bạn có muốn xoá bình luận này?',
      nzContent: '<b style="color: red;">Bạn không thể hoàn tác hành động này!</b>',
      nzOkText: 'Xác nhận',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'Không',
      nzOnOk: () => {
        return this.commentService.delete(postId, id).subscribe(result => {
          this.get();
          this.notification.create('success', 'Xác nhận', 'Bình luận đã được xoá thành công!');
        });
      }
    });
  }
}
