import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutsComponent } from "./abouts/abouts.component";
import { CategoriesDetailComponent } from "./categories/categories-detail/categories-detail.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CommentsComponent } from "./comments/comments.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'abouts',
                component: AboutsComponent,
                data: {
                    title: 'Abouts'
                }
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                data: {
                    title: 'Categories'
                }
            },
            {
                path: 'comments',
                component: CommentsComponent,
                data: {
                    title: 'Comments'
                }
            },
            {
                path: 'contacts',
                component: ContactsComponent,
                data: {
                    title: 'Contacts'
                }
            },
            {
                path: 'posts',
                component: PostsComponent,
                data: {
                    title: 'Posts'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutngModule { }