import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CommentFormComponent } from './commentform.component';
import { PostFormComponent } from './postform.component';

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [
    CommentFormComponent,
    PostFormComponent,
  ],
   entryComponents: [
    PostFormComponent,
  ],
  exports: [
    CommentFormComponent,
    PostFormComponent,
  ],
})
export class PostFormModule { }
