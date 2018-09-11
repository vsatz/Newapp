import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';


import { Post, DraftPost } from '../common/post';
import { SimpleService } from '../common/simple.service';
import { PostFormComponent } from './form/postform.component';

@Component({
  selector: 'spritle-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  private posts: Post[];

  constructor(
    private readonly spritleService: SimpleService,
    private readonly dialog: MatDialog,
  ) {
    this.posts = spritleService.fetchPosts();
  }

  openNewPostDialog(): void {
    const dialogRef = this.dialog.open(PostFormComponent);

    dialogRef.afterClosed().subscribe((draft?: DraftPost) => {
      if (!draft) {
        return;
      }
      this.spritleService.createPost(draft);
      this.posts = this.spritleService.fetchPosts();
    });
  }
}
