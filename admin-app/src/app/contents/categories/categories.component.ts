import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Category } from 'src/app/shared/models';
import { CategoriesService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // Initialize column table
  categoryColumn = [
    {
      title: 'ID',
      compare: (a: Category, b: Category) => a.id - b.id,
    },
    {
      title: 'Title',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: 'Slug',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: 'Sort Order',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: 'Parent Category',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: 'Have Parent',
      compare: (a: Category, b: Category) => a.title.localeCompare(b.title)
    },
    {
      title: ''
    }
  ]

  displayData = [];
  searchInput: string;
  categories$: any;

  constructor(
    private tableSvc: TableService, 
    private categoriesService: CategoriesService,
    private modalService: NzModalService) {
      this.get();
  }

  @ViewChild(CategoriesDetailComponent) childView !:CategoriesDetailComponent;
  ngOnInit(): void {
    
  }

  get() {
    this.categoriesService.get().subscribe((res: any) => {
      this.displayData = this.categories$ = res;
    })
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
      nzTitle: 'Are you sure delete this category?',
      nzContent: '<b style="color: red;">You wont be able to revert this!</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'No',
      nzOnOk: () => {
        return this.categoriesService.delete(id).subscribe(result => {
          this.get();
        });
      }
    });
  }
}
