import { Component, Output} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import {DraftPost} from '../../common/post';

@Component({
  selector: 'spritle-post-form',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostFormComponent {
  post: DraftPost = {
    content: '',
  };

  constructor(private readonly dialogRef: MatDialogRef<PostFormComponent>) {}

  discard() {
    this.dialogRef.close();
  }
}
