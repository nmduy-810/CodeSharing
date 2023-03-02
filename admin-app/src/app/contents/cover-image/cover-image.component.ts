import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  Subscription
} from 'rxjs';
import {
  CoverImageService
} from 'src/app/shared/services/cover-image.serivce';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.css']
})
export class CoverImageComponent implements OnInit {

  @Output() saveClicked = new EventEmitter<number>();

  isModalVisible = false;
  subscription = new Subscription();
  displayData: any;
  coverImage$: any;

  constructor(private coverImageService: CoverImageService) {
    this.get();
  }

  ngOnInit(): void {}

  get() {
    this.subscription.add(this.coverImageService.get().subscribe((res: any) => {
      this.displayData = this.coverImage$ = res;
    }));
  }

  onImageClick(item: any) {
    this.displayData.forEach((image: any) => {
      image.selected = false;
    });
    item.selected = true;
  }

  cancel(): void {
    this.isModalVisible = false;
  }

  open() {
    this.isModalVisible = true;
  }

  save() {
    const selectedImage = this.displayData.find((image: any) => image.selected);
    if (selectedImage) {
      const selectedId = selectedImage.id; // replace 'id' with the actual property name in your data
      // do something with the selected image ID
      this.saveClicked.emit(selectedId);
      this.isModalVisible = false;
    }
  }
}