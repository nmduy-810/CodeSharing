import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MonthlyNewCommentsComponent } from "./monthly-new-comments/monthly-new-comments.component";
import { MonthlyNewMembersComponent } from "./monthly-new-members/monthly-new-members.component";
import { MonthlyNewPostsComponent } from "./monthly-new-posts/monthly-new-posts.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'monthly-new-comments',
                component: MonthlyNewCommentsComponent,
                data: {
                    title: 'Monthly New Comments'
                }
            },
            {
                path: 'monthly-new-posts',
                component: MonthlyNewPostsComponent,
                data: {
                    title: 'Monthly New Posts'
                }
            },
            {
                path: 'monthly-new-members',
                component: MonthlyNewMembersComponent,
                data: {
                    title: 'Monthly New Members'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticsRoutingModule { }