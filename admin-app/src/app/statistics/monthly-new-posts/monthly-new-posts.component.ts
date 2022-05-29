import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/shared/services';

@Component({
  selector: 'app-monthly-new-posts',
  templateUrl: './monthly-new-posts.component.html',
  styleUrls: ['./monthly-new-posts.component.css']
})
export class MonthlyNewPostsComponent implements OnInit {

  // Initialize column table
  monthlyNewPostsColumn = [
    {
      title: 'Tháng',
    },
    {
      title: 'Số lượng bài viết mới',
    },
    {
      title: ''
    }
  ]

  public year: number = new Date().getFullYear();
  public totalItems = 0;
  public displayData = [];

  constructor(private statisticService: StatisticsService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.statisticService.getMonthlyNewPosts(this.year)
      .subscribe((response: any) => {
        this.totalItems = 0;
        this.displayData = response;
        response.forEach(element => {
          this.totalItems += element.NumberOfUsers;
        });
        setTimeout(() => { }, 1000);
      }, error => {
        setTimeout(() => { }, 1000);
      });
  }
}
