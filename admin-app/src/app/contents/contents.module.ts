import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ContentsRoutngModule } from './contents-routing.module';



@NgModule({
  declarations: [
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    ContactsComponent,
    AboutsComponent
  ],
  imports: [
    CommonModule,
    ContentsRoutngModule
  ]
})
export class ContentsModule { }
