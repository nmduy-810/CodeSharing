import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyNewCommentsComponent } from './monthly-new-comments/monthly-new-comments.component';
import { MonthlyNewMembersComponent } from './monthly-new-members/monthly-new-members.component';
import { MonthlyNewPostsComponent } from './monthly-new-posts/monthly-new-posts.component';
import { StatisticsRoutingModule } from './statistics-routing.module';



@NgModule({
  declarations: [
    MonthlyNewCommentsComponent,
    MonthlyNewMembersComponent,
    MonthlyNewPostsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
