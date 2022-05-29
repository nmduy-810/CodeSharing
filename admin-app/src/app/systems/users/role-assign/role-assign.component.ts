import { Component, Input, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/shared/models';
import { RolesService, UserService } from 'src/app/shared/services';

@Component({
  selector: 'app-role-assign',
  templateUrl: './role-assign.component.html',
  styleUrls: ['./role-assign.component.css']
})
export class RoleAssignComponent implements OnInit {

  @Input() id: string;
  
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    }
  ];
  
  isConfirmLoading = false;
  subscription = new Subscription();

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Role[] = [];
  listOfData: readonly Role[] = [];
  setOfCheckedId = new Set<string>();

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Role[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  constructor(
    private usersService: UserService,
    private rolesService: RolesService,
    private notification: NzNotificationService) {

  }

  ngOnInit(): void {
    this.subscription.add(this.rolesService.get().subscribe((res: any) => {
      this.listOfData = res;
    }));
  }

  save() {
    this.isConfirmLoading = true;
    const selectedNames = [];
    this.setOfCheckedId.forEach(element => {
      selectedNames.push(element);
    });

    const assignRolesToUser = {
      roleNames: selectedNames
    };

    this.usersService.assignRolesToUser(this.id, assignRolesToUser).subscribe(() => {
      setTimeout(() => { this.isConfirmLoading = false; }, 1000);
      this.notification.create('success', 'Xác nhận', 'Tài khoản được gán quyền thành công!');
    }, error => {
      setTimeout(() => { this.isConfirmLoading = false; }, 1000);
      this.notification.create('error', 'Xác nhận', 'Tài khoản được gán quyền thấi bại!');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
