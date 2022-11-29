import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosts from './posts.reducer';

export const selectPostsState = createFeatureSelector<fromPosts.State>(
  fromPosts.postsFeatureKey
);

export const currentFilterOption = createSelector(
  selectPostsState,
  ({ filterOption }) => filterOption
);

export const postNodes = createSelector(
  selectPostsState,
  ({ groupedPostNodes }) => groupedPostNodes
);
