import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.scss']
})
export class CategoriesDetailComponent implements OnInit {

  constructor(private modalService: NgbModal, private categoriesService: CategoriesService) { }

  @ViewChild('content') addView !: ElementRef
  ngOnInit(): void {
    this.getCategories();
  }

  public closeResult: string = '';
  public categories$: any;
  public isParentChecked: boolean = false; // hidden by default

  public errorMessage = '';
  public errorClass = '';
  
  public serverResponse: any;

  updateData: any;

  public categoryForm = new FormGroup({
    parentCategoryId: new FormControl(null),
    title: new FormControl('', Validators.compose([Validators.required])),
    slug: new FormControl('', Validators.compose([Validators.required])),
    sortOrder: new FormControl('', Validators.compose([Validators.required])),
    isParent: new FormControl(false),
    
  });

  saveCategory() {
    if(this.categoryForm.valid) {
      this.categoriesService.postCategory(this.categoryForm.getRawValue()).subscribe(result => {
        
      });
    } else {
      this.errorMessage = "Please enter valid data";
      this.errorClass = "errorMessage";
    }
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories$ = data;
    });
  }

  getUpdateCategoryData(id: any) {
    this.categoriesService.getById(id).subscribe(result => {
      this.updateData = result;
      this.categoryForm.setValue({
        parentCategoryId: this.updateData.parentCategoryId,
        title: this.updateData.title,
        slug: this.updateData.slug,
        sortOrder: this.updateData.sortOrder,
        isParent: this.updateData.isParent
      })
    });

    this.open();
  }

  clearForm() {
    this.categoryForm.setValue({
      parentCategoryId: null,
      title: '',
      slug: '',
      sortOrder: 0,
      isParent: false
    })
  }

  checkParent() {
    this.isParentChecked = !this.isParentChecked;
  }

  get title() {
    return this.categoryForm.get("title");
  }

  get slug() {
    return this.categoryForm.get("slug");
  }

  get sortOrder() {
    return this.categoryForm.get("sortOrder");
  }

  open() {
    this.clearForm();
    this.modalService.open(this.addView, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

