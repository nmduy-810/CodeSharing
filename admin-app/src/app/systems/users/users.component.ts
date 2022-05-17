import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models';
import { RolesService, UserService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';
import { RoleAssignComponent } from './role-assign/role-assign.component';
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

  // User
  searchInput: string;
  user$: any;
  subscription = new Subscription();

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

  // Role
  public displayData: [];
  public showRoleAssign = false;
  public roleNames: string[] = [];

  rolesColumn = [
    {
      title: 'Mã quyền',
    },
    {
      title: 'Tên quyền'
    },
  ]

  constructor(
    private tableSvc: TableService,
    private usersService: UserService,
    private modalService: NzModalService,
    private notification: NzNotificationService,
    private viewContainerRef: ViewContainerRef) { }

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
      nzTitle: 'Bạn có muốn xoá tài khoản này?',
      nzContent: '<b style="color: red;">Bạn không thể hoàn tác hành động này!</b>',
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

  showHideRoleTable() {
    if (this.showRoleAssign) {
      console.log(this.setOfCheckedId.size);
      if (this.setOfCheckedId.size === 1) {
        this.loadUserRoles();
      }
      else {
        this.modalService.warning({
          nzTitle: 'Lỗi',
          nzContent: 'Bạn chưa chọn vào tài khoản!'
        });
        this.showRoleAssign = false;
      }
    }
  }

  loadUserRoles() {
    // Nếu tồn tại selection thì thực hiện
    if (this.setOfCheckedId.values().next().value != null && this.setOfCheckedId.size > 0) {
      const userId = this.setOfCheckedId.values().next().value;
      this.subscription.add(this.usersService.getUserRoles(userId).subscribe((response: any) => {
        this.displayData = response;
      }));
    }
  };

  deleteRole(item) {

    this.modalService.confirm({
      nzTitle: 'Bạn có muốn xoá quyền cho tài khoản này?',
      nzContent: '<b style="color: red;">Bạn không thể hoàn tác hành động này!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'No',
      nzOnOk: () => {
        const userId = this.setOfCheckedId.values().next().value;
        this.roleNames.push(item);
        this.usersService.removeRolesFromUser(userId, this.roleNames).subscribe(() => {
          setTimeout(() => { }, 1000);
          this.loadUserRoles();
          this.roleNames = [];
          this.notification.create('success', 'Xác nhận', 'Tài khoản được xoá quyền thành công!');
        }, error => {
          setTimeout(() => { }, 1000);
          this.notification.create('error', 'Xác nhận', 'Tài khoản được xoá quyền thất bại!');
        });
      }
    });
  }

  addUserRoles(): void {
    const userId = this.setOfCheckedId.values().next().value;
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'Gán quyền',
      nzContent: RoleAssignComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        id: userId
      },
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => {
      this.loadUserRoles();
      this.roleNames = [];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
