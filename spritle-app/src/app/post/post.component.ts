import { Component, Input } from '@angular/core';
import { Post, PLACEHOLDER_POST } from '../common/post';
import { DraftComment } from '../common/comment';
import { SimpleService } from '../common/simple.service';

@Component({
  selector: 'spritle-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: Post = PLACEHOLDER_POST;
  showComments = false;

  constructor(private readonly simpleService: SimpleService) { }

  toggleLike(): void {
    this.post = this.simpleService.toggleLike(this.post);
  }

  addComment(comment: DraftComment): void {
    this.post = this.simpleService.addComment(this.post, comment);
  }
}
