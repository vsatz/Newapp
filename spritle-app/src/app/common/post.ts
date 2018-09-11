import {User, Users} from './user';
import {Comment} from './comment';

export interface DraftPost {
  content: string;
}

export class Post implements DraftPost {
  readonly content: string;
  readonly createdMillis: number;
  readonly author: User;
  readonly likes: User[];
  readonly comments: Comment[];
  liked?: boolean;
}

export const PLACEHOLDER_POST: Post = {
  author: Users.PLACEHOLDER,
  content: 'Lorem ipsum dolor sit amet.',
  createdMillis: Date.now() - 3600000,
  likes: [
    Users.PLACEHOLDER,
  ],
  comments: [
    {
      author: Users.PLACEHOLDER,
      content: 'consectetur adipisicing elit',
      createdMillis: Date.now() - 360000,
    }
  ],
};
