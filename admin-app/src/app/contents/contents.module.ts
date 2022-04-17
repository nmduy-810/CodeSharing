import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ContentsRoutngModule } from './contents-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoriesDetailComponent } from './categories/categories-detail/categories-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    ContactsComponent,
    AboutsComponent,
    CategoriesDetailComponent
  ],
  imports: [
    CommonModule,
    ContentsRoutngModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ContentsModule { }
