import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/shared/models';
import { ContactsService } from 'src/app/shared/services';
import { TableService } from 'src/app/shared/services/table.service';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {

  // Initialize column table
  contactColumn = [
    {
      title: 'ID',
      compare: (a: Contact, b: Contact) => a.id - b.id,
    },
    {
      title: 'Phone',
    },
    {
      title: 'Email',
    },
    {
      title: 'Location',
    },
    {
      title: ''
    }
  ]

  displayData = [];
  searchInput: string;
  contacts$: any;
  subscription = new Subscription();

  constructor(
    private contactsService: ContactsService) { }

  @ViewChild(ContactsDetailComponent) childView !: ContactsDetailComponent;
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.subscription.add(this.contactsService.get().subscribe((res: any) => {
      this.displayData = this.contacts$ = res;
    }));
  }

  update(id: any) {
    this.childView.update(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
