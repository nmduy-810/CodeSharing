import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { AboutComponent } from "./about/about.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CommentsComponent } from "./comments/comments.component";
import { PostsAddComponent } from "./posts/posts-add/posts-add.component";
import { PostsDetailComponent } from "./posts/posts-detail/posts-detail.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    title: 'About'
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
                path: 'contact',
                component: ContactsComponent,
                data: {
                    title: 'Contact'
                }
            },
            {
                path: 'posts',
                component: PostsComponent,
                data: {
                    title: 'Posts'
                }
            },
            {
                path: 'posts/:id',
                component: PostsDetailComponent,
                data: {
                    title: 'Post Details'
                }
            },
            {
                path: 'post',
                component: PostsAddComponent,
                data: {
                    title: 'Create Post'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutingModule { }