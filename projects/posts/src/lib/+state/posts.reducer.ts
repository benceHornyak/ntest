import { DatePipe } from '@angular/common';
import { createReducer, on } from '@ngrx/store';
import { FilterOptions, GroupedPosts, Post, PostNode } from '../models';
import * as PostsActions from './posts.actions';

export const postsFeatureKey = 'postsState';

export interface State {
  posts: Post[];
  filterOption: FilterOptions;
  groupedPostNodes: PostNode[];
  postDetail: Post | undefined;
}

export const initialState: State = {
  posts: [],
  filterOption: 'week',
  groupedPostNodes: [],
  postDetail: undefined,
};

const groupingReducerFn = (
  state: State,
  filterOption: FilterOptions = state.filterOption
): State => {
  if (filterOption === 'week') {
    const postsFromState = [...state.posts];
    const pipe = new DatePipe('en');
    const groupedByWeekPosts = postsFromState.reduce<GroupedPosts>(
      (acc, curr) => {
        const weekNumber = pipe.transform(
          new Date(+curr.time * 1000),
          'w'
        ) as string;
        const posts = [...(acc[weekNumber] ?? [])];
        acc[weekNumber] = [...posts, curr];
        return acc;
      },
      {}
    );

    const groupedByWeek = Object.entries(groupedByWeekPosts).map<PostNode>(
      ([filterOption, posts]) => {
        return {
          filteredBy: filterOption,
          children: [
            ...posts.map<Post & { filteredBy: string }>((p) => ({
              ...p,
              filteredBy: filterOption,
            })),
          ],
        };
      }
    );

    return {
      ...state,
      filterOption,
      groupedPostNodes: groupedByWeek,
    };
  }

  const postsFromState = [...state.posts];
  const groupedByAuthor = postsFromState.reduce<GroupedPosts>((acc, curr) => {
    const filterKey = curr[filterOption];
    const posts = [...(acc[filterKey] ?? [])];
    acc[filterKey] = [...posts, curr];
    return acc;
  }, {});

  const groupedByWeek = Object.entries(groupedByAuthor).map<PostNode>(
    ([filterOption, posts]) => {
      return {
        filteredBy: filterOption,
        children: [
          ...posts.map<Post & { filteredBy: string }>((p) => ({
            ...p,
            filteredBy: filterOption,
          })),
        ],
      };
    }
  );

  return {
    ...state,
    filterOption,
    groupedPostNodes: groupedByWeek,
  };
};

export const reducer = createReducer(
  initialState,

  on(PostsActions.loadPosts, (state) => state),
  on(PostsActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: [...posts],
  })),
  on(PostsActions.changeFilterOption, (state, { filterOption }) => {
    return { ...groupingReducerFn(state, filterOption) };
  }),
  on(PostsActions.initialGrouping, (state) => {
    return { ...groupingReducerFn(state) };
  }),
  on(PostsActions.loadPostDetail, (state) => state),
  on(PostsActions.loadPostDetailSuccess, (state, { post }) => ({
    ...state,
    postDetail: post,
  })),
  on(PostsActions.updatePostSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
  }))
);
