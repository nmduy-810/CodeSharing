import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { About } from 'src/app/shared/models';
import { AboutsService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';
import { AboutsDetailComponent } from './abouts-detail/abouts-detail.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  // Initialize column table
  aboutColumn = [
    {
      title: 'ID',
      compare: (a: About, b: About) => a.id - b.id,
    },
    {
      title: 'Description',
    },
    {
      title: 'Image',
    },
    {
      title: ''
    }
  ]

  displayData = [];
  searchInput: string;
  about$: any;
  subscription = new Subscription();
  
  constructor(
    private tableSvc: TableService,
    private aboutsService: AboutsService,
    private modalService: NzModalService ) { }

  @ViewChild(AboutsDetailComponent) childView !:AboutsDetailComponent;
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.subscription.add(this.aboutsService.get().subscribe((res: any) => {
      this.displayData = this.about$ = res;
    }));
  }

  update(id: any) {
    this.childView.update(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
