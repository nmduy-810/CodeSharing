import { Component } from '@angular/core'
import { User } from 'src/app/shared/models';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService, StatisticsService, UserService } from 'src/app/shared/services';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
    templateUrl: './default-dashboard.component.html'
})

export class DefaultDashboardComponent {

    themeColors = this.colorConfig.get().colors;
    blue = this.themeColors.blue;
    blueLight = this.themeColors.blueLight;
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;

    // Statistics
    public year: number = new Date().getFullYear();
    public totalOfComments = 0;
    public totalOfPosts = 0;
    public totalOfRegisterUsers = 0;

    // User
    listOfData: readonly User[] = [];
    userColumn = [
        {
            title: 'Tên tài khoản',
            compare: (a: User, b: User) => a.userName.localeCompare(b.userName)
        },
        {
            title: 'Họ và tên',
            compare: (a: User, b: User) => a.firstName.localeCompare(b.firstName)
        },
        {
            title: 'Email',
        },
        {
            title: 'Ngày tạo',
        }
    ]

    // Post
    postsColumn = [
        {
            title: 'Danh mục',
        },
        {
            title: 'Tiêu đề',
        }
    ]
    postData: readonly Post[] = [];

    constructor(
        private colorConfig: ThemeConstantService, 
        private statisticsService: StatisticsService, 
        private usersService: UserService,
        private postsService: PostsService) { }

    salesChartOptions: any = {
        scaleShowVerticalLines: false,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                },
                gridLines: false,
                ticks: {
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 10
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                },
                gridLines: {
                    drawBorder: false,
                    offsetGridLines: false,
                    drawTicks: false,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]
                },
                ticks: {
                    max: 80,
                    stepSize: 20,
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 10
                }
            }]
        }
    };
    salesChartLabels: string[] = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    salesChartType = 'bar';
    salesChartColors: Array<any> = [
        {
            backgroundColor: this.themeColors.blue,
            borderWidth: 0
        },
        {
            backgroundColor: this.themeColors.blueLight,
            borderWidth: 0
        }
    ];
    salesChartData: any[] = [
        {
            data: [20, 30, 35, 45, 55, 45],
            label: 'Online',
            categoryPercentage: 0.35,
            barPercentage: 0.70
        },
        {
            data: [25, 35, 40, 50, 60, 50],
            label: 'Offline',
            categoryPercentage: 0.35,
            barPercentage: 0.70
        }
    ];

    revenueChartFormat: string = 'revenueMonth';

    revenueChartData: Array<any> = [{
        data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
        label: 'Series A'
    }];
    currentrevenueChartLabelsIdx = 1;
    revenueChartLabels: Array<any> = ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"];
    revenueChartOptions: any = {
        maintainAspectRatio: false,
        responsive: true,
        hover: {
            mode: 'nearest',
            intersect: true
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                gridLines: [{
                    display: false,
                }],
                ticks: {
                    display: true,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    drawTicks: false,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]
                },
                ticks: {
                    display: true,
                    max: 100,
                    stepSize: 20,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }
            }],
        }
    };
    revenueChartColors: Array<any> = [
        {
            backgroundColor: this.themeColors.transparent,
            borderColor: this.cyan,
            pointBackgroundColor: this.cyan,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.cyanLight,
            pointHoverBorderColor: this.cyanLight
        }
    ];
    revenueChartType = 'line';

    customersChartLabels: string[] = ['Direct', 'Referral', 'Social Network'];
    customersChartData: number[] = [350, 450, 100];
    customersChartColors: Array<any> = [{
        backgroundColor: [this.gold, this.blue, this.red],
        pointBackgroundColor: [this.gold, this.blue, this.red]
    }];
    customersChartOptions: any = {
        cutoutPercentage: 80,
        maintainAspectRatio: false
    }
    customersChartType = 'doughnut';

    ngOnInit() {
        // Statistics
        this.loadNumberOfComments();
        this.loadNumberOfPosts();
        this.loadNumberOfRegisterUsers();
        this.getUsers();
        this.getLatestPost();
    }

    loadNumberOfComments() {
        this.statisticsService.getMonthlyNewComments(this.year).subscribe((response: any) => {
            this.totalOfComments = 0;
            response.forEach(element => {
                this.totalOfComments += element.numberOfComments;
            });
            setTimeout(() => { }, 1000);
        }, error => {
            setTimeout(() => { }, 1000);
        });
    }

    loadNumberOfPosts() {
        this.statisticsService.getMonthlyNewPosts(this.year).subscribe((response: any) => {
            this.totalOfPosts = 0;
            console.log(response);
            response.forEach(element => {
                this.totalOfPosts += element.numberOfNewPosts;
            });
            setTimeout(() => { }, 1000);
        }, error => {
            setTimeout(() => { }, 1000);
        });
    }

    loadNumberOfRegisterUsers() {
        this.statisticsService.getMonthlyNewRegisterUsers(this.year).subscribe((response: any) => {
            this.totalOfRegisterUsers = 0;
            console.log(response);
            response.forEach(element => {
                this.totalOfRegisterUsers += element.numberOfRegisterUsers;
            });
            setTimeout(() => { }, 1000);
        }, error => {
            setTimeout(() => { }, 1000);
        });
    }

    getUsers() {
        this.usersService.get().subscribe((res: any) => {
            this.listOfData = res;
        });
    }

    getLatestPost() {
        this.postsService.getLatest().subscribe((res: any) => {
          this.postData = res;
        });
      }
}    