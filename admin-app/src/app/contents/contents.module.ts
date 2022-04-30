import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { ContentsRoutingModule } from './contents-routing.module';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AppsService } from '../shared/services/apps.service';
import { TableService } from '../shared/services/table.service';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { SharedModule } from '../shared/shared.module';
import { CategoriesDetailComponent } from './categories/categories-detail/categories-detail.component';
import { PostsDetailComponent } from './posts/posts-detail/posts-detail.component';
import { PostsAddComponent } from './posts/posts-add/posts-add.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NzMentionModule } from 'ng-zorro-antd/mention';

const antdModule = [
  NzButtonModule,
  NzCardModule,
  NzAvatarModule,
  NzRateModule,
  NzBadgeModule,
  NzProgressModule,
  NzRadioModule,
  NzTableModule,
  NzDropDownModule,
  NzTimelineModule,
  NzTabsModule,
  NzTagModule,
  NzListModule,
  NzCalendarModule,
  NzToolTipModule,
  NzFormModule,
  NzModalModule,
  NzSelectModule,
  NzUploadModule,
  NzInputModule,
  NzPaginationModule,
  NzDatePickerModule,
  NzCheckboxModule,
  NzMessageModule,
  NzMentionModule
]

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    CategoriesDetailComponent,
    PostsDetailComponent,
    PostsAddComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    ContentsRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    QuillModule.forRoot(),
        ...antdModule
  ],
  providers: [
    ThemeConstantService,
    AppsService,
    TableService
]
})
export class ContentsModule { }
