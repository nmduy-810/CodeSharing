import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/shared/services';

@Component({
  selector: 'app-monthly-new-comments',
  templateUrl: './monthly-new-comments.component.html',
  styleUrls: ['./monthly-new-comments.component.css']
})
export class MonthlyNewCommentsComponent implements OnInit {

  // Initialize column table
  monthlyNewCommentsColumn = [
    {
      title: 'Tháng',
    },
    {
      title: 'Số lượng bình luận mới',
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
    this.statisticService.getMonthlyNewComments(this.year)
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
