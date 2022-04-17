import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories$: any;

  constructor(
    private categoriesService: CategoriesService) { }

  @ViewChild(CategoriesDetailComponent) addView !:CategoriesDetailComponent;
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((res: any) => {
      console.log(res);
      this.categories$ = res;
    })
  }

  updateCategory(id: any) {
    this.addView.getUpdateCategoryData(id);
  }

  deleteCategory(id: any) {
    if(confirm(`Do you want to delete with id = ${id}`)) {
      this.categoriesService.deleteCategory(id).subscribe(result => {
        this.getCategories();
      });
    }
  }
}