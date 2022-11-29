import { createAction, props } from '@ngrx/store';
import { FilterOptions, Post } from '../models';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const initialGrouping = createAction('[Posts] Initial Grouping');
export const changeFilterOption = createAction(
  '[Posts] Change Filter Option',
  props<{
    filterOption: FilterOptions;
  }>()
);
