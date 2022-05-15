import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models';
import { UserService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    }
  ];

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly User[] = [];
  listOfData: readonly User[] = [];
  setOfCheckedId = new Set<number>();

  searchInput: string;
  user$: any;
  subscription = new Subscription();
  
  // Initialize column table
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
      title: 'Ngày sinh',
    },
    {
      title: 'Số điện thoại',
    },
    {
      title: 'Ngày tạo',
    },
    {
      title: ''
    }
  ]

  constructor(private tableSvc: TableService, private usersService: UserService, private modalService: NzModalService) { }

  @ViewChild(UsersDetailComponent) childUserDetailView !: UsersDetailComponent;
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.subscription.add(this.usersService.get().subscribe((res: any) => {
      this.listOfData = this.user$ = res;
    }));
  }

  update(id: any) {
    this.childUserDetailView.update(id);
  }

  search() {
    const data = this.user$;
    this.listOfData = this.tableSvc.search(this.searchInput, data)
  }

  delete(id: any) {
    this.modalService.confirm({
      nzTitle: 'Are you sure delete this user?',
      nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'No',
      nzOnOk: () => {
        return this.usersService.delete(id).subscribe(result => {
          this.get();
        });
      }
    });
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly User[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
