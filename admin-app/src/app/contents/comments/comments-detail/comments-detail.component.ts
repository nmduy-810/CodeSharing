import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/shared/models';
import { CommentsService } from 'src/app/shared/services';

@Component({
  selector: 'app-comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: ['./comments-detail.component.css']
})
export class CommentsDetailComponent implements OnInit {

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
      title: 'Ngày tạo',
      compare: (a: Comment, b: Comment) => a.createDate.localeCompare(b.createDate)
    },
    {
      title: ''
    }
  ]
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private commentService: CommentsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      this.getCommentById(id);
    });
  }

  getCommentById(id: any) {
    this.subscription.add(this.commentService.getCommentsByPostId(id).subscribe((res: any) => {
      this.displayData = res;
    }));
  }
}
