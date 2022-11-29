import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';

import {
  concatMap,
  filter,
  map,
  skipWhile,
  withLatestFrom,
} from 'rxjs/operators';
import * as PostsActions from './posts.actions';
import * as PostsSelectors from './posts.selectors';
import { PostsService } from '../posts.service';
import { Action, select, Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class PostsEffects implements OnInitEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      withLatestFrom(this.store.pipe(select(PostsSelectors.getPosts))),
      concatMap(([, posts]) =>
        (posts.length > 0 ? of(posts) : this.postsService.getPosts()).pipe(
          map((posts) => PostsActions.loadPostsSuccess({ posts: posts }))
        )
      )
    );
  });

  groupInitially$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.loadPostsSuccess),
      map(() => PostsActions.initialGrouping())
    );
  });

  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private store: Store
  ) {}

  ngrxOnInitEffects(): Action {
    return PostsActions.loadPosts();
  }
}
