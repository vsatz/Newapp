import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User, Users } from './user';
import { DraftComment, Comment } from './comment';
import { DraftPost, Post, PLACEHOLDER_POST } from './post';

/**
 * Service that ideally would talk to a server opertating out of a database,
 * really is just faking it.
 */
@Injectable()
export class SimpleService {
  /**
   * Currently logged in user.
   *
   * Ideally only the backend server would know the exact user so that people
   * who can open browser dev tools aren't empowered to impersonate others. But
   * we don't have a server so this service acts as the backend.
   */
  private loggedInUser?: User;

  constructor(private readonly router: Router) { }

  get isLoggedIn(): boolean {
    return !!this.loggedInUser;
  }

  login(user: User): void {
    this.loggedInUser = user;
    this.maybeRedirectToFeed();
  }

  logout(): void {
    this.loggedInUser = undefined;
    this.redirectToLogin();
  }

  fetchUsers(): User[] {
    return REGISTERED_USERS.slice();
  }

  maybeRedirectToFeed(): void {
    if (this.isLoggedIn) { this.router.navigate(['feed']); }
  }

  redirectToLogin(): void {
    this.router.navigate(['']);
  }

  addComment(post: Post, draft: DraftComment): Post | null {
    const author = this.loggedInUser;
    if (!author) {
      this.router.navigate(['']);
      return post;
    }

    post.comments.push({
      content: draft.content,
      createdMillis: Date.now(),
      author,
    });
    return post;
  }

  createPost(draft: DraftPost): void {
    const author = this.loggedInUser;
    if (!author) {
      this.redirectToLogin();
      return;
    }

    POSTS.unshift({
      content: draft.content,
      createdMillis: Date.now(),
      author,
      likes: [],
      comments: [],
    });
  }

  toggleLike(post: Post): Post | null {
    const user = this.loggedInUser;
    if (!user) {
      this.redirectToLogin();
      return null;
    }

    const index = post.likes.findIndex(liker => liker.equals(user));
    if (index === -1) {
      post.likes.push(user);
      post.liked = true;
    } else {
      post.likes.splice(index, 1);
      post.liked = false;
    }
    return post;
  }

  fetchPosts(): Post[] {
    const user = this.loggedInUser;
    if (!user) {
      this.redirectToLogin();
      return [];
    }
    return POSTS.map(post => {
      post.liked = post.likes.some(liker => liker.equals(user));
      return post;
    });
  }
}

const REGISTERED_USERS: User[] = [
  Users.CHANDRAN,
  Users.INDRAN,
  Users.LAKSHMIPRIYA,
  Users.MANIK,
  Users.PRABAKARAN,
  Users.SAKTHIVEL,
  Users.STEVE,
  Users.SHARATH,
  Users.SAMUEL,
  Users.SATHISH
];

const POSTS: Post[] = [
  PLACEHOLDER_POST
  
];
