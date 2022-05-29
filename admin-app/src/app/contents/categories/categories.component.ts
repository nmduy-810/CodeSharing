import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/shared/models';
import { CategoriesService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  // Initialize column table
  categoryColumn = [
    
    {
      title: 'Tên danh mục',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: 'Đường dẫn SEO',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: 'Thứ tự sắp xếp',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: 'Danh mục cha',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: ''
    }
  ]

  displayData = [];
  searchInput: string;
  categories$: any;
  subscription = new Subscription();

  constructor(
    private tableSvc: TableService, 
    private categoriesService: CategoriesService,
    private modalService: NzModalService,
    private notification: NzNotificationService) {
      this.get();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @ViewChild(CategoriesDetailComponent) childView !:CategoriesDetailComponent;
  ngOnInit(): void {
    
  }

  get() {
    this.subscription.add(this.categoriesService.get().subscribe((res: any) => {
      this.displayData = this.categories$ = res;
    }));
  }

  search() {
    const data = this.categories$;
    this.displayData = this.tableSvc.search(this.searchInput, data)
  }

  update(id: any) {
    this.childView.update(id);
  }

  delete(id: any) {
    this.modalService.confirm({
      nzTitle: 'Bạn có muốn xoá danh mục này?',
      nzContent: '<b style="color: red;">Bạn không thể hoàn tác hành động này!</b>',
      nzOkText: 'Xác nhận',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'Không',
      nzOnOk: () => {
        return this.categoriesService.delete(id).subscribe(result => {
          this.get();
          this.notification.create('success', 'Xác nhận', 'Danh mục đã được xoá thành công!');
        });
      }
    });
  }
}
