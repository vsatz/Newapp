import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { FeedComponent } from './feed.component';
import { PostComponent } from './post.component';
import { DatetimeModule } from '../datetime/datetime.module';
import { PostFormModule } from './form/form.module';

const routes: Routes = [
  {
    path: 'feed',
    component: FeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    DatetimeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    PostFormModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    FeedComponent,
    PostComponent,
  ],
  providers: [],
  exports: [],
})
export class PostModule { }
