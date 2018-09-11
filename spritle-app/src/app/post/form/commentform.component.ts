import { Component, Output, EventEmitter } from '@angular/core';

import { DraftComment } from '../../common/comment';

@Component({
  selector: 'spritle-comment-form',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.css']
})
export class CommentFormComponent {
  comment = '';

  @Output() newComment: EventEmitter<DraftComment> = new EventEmitter();

  commit(): void {
    if (this.comment) {
      this.newComment.emit({content: this.comment});
      this.comment = '';
    }
  }
}
