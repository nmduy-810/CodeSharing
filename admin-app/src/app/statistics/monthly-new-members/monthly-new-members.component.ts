import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/shared/services';

@Component({
  selector: 'app-monthly-new-members',
  templateUrl: './monthly-new-members.component.html',
  styleUrls: ['./monthly-new-members.component.css']
})
export class MonthlyNewMembersComponent implements OnInit {

  // Initialize column table
  monthlyRegisterUsersColumn = [
    {
      title: 'Tháng',
    },
    {
      title: 'Số lượng thành viên mới',
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
    this.statisticService.getMonthlyNewRegisterUsers(this.year)
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
