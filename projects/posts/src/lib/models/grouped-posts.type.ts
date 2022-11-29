import { Post } from './post.interface';

export type GroupedPosts = Record<string, Post[]>;

export interface PostNode extends Partial<Post> {
  filteredBy: string;
  children?: PostNode[];
}
