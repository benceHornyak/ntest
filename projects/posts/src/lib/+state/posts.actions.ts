import { createAction, props } from '@ngrx/store';
import { FilterOptions, Post } from '../models';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostDetail = createAction(
  '[Post Detail] Load Post Detail',
  props<{ postId: number }>()
);
export const loadPostDetailSuccess = createAction(
  '[Post Detail] Load Post Detail Success',
  props<{ post: Post }>()
);

export const updatePost = createAction(
  '[Post Update] Update Post',
  props<{ post: Post }>()
);
export const updatePostSuccess = createAction(
  '[Post Update] Update Post Success',
  props<{ posts: Post[] }>()
);

export const initialGrouping = createAction('[Posts] Initial Grouping');
export const changeFilterOption = createAction(
  '[Posts] Change Filter Option',
  props<{
    filterOption: FilterOptions;
  }>()
);
