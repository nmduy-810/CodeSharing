import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyNewMembersComponent } from './monthly-new-members/monthly-new-members.component';
import { MonthlyNewPostsComponent } from './monthly-new-posts/monthly-new-posts.component';
import { MonthlyNewCommentsComponent } from './monthly-new-comments/monthly-new-comments.component';
import { StatisticsRoutingModule } from './statistics-routing.module';



@NgModule({
  declarations: [
    MonthlyNewMembersComponent,
    MonthlyNewPostsComponent,
    MonthlyNewCommentsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
