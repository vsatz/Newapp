import { User } from './user';

export interface DraftComment {
  content: string;
}

export interface Comment extends DraftComment {
  readonly content: string;
  readonly author: User;
  readonly createdMillis: number;
}
