import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';

import { concatMap, map, withLatestFrom } from 'rxjs/operators';
import * as PostsActions from './posts.actions';
import * as PostsSelectors from './posts.selectors';
import { PostsService } from '../posts.service';
import { Action, select, Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { Post } from '../models';

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

  loadPostDetail$ = createEffect(() =>
    combineLatest([
      this.actions$.pipe(ofType(PostsActions.loadPostDetail)),
      this.actions$.pipe(ofType(PostsActions.loadPostsSuccess)),
    ]).pipe(
      map(([{ postId }, { posts }]) => {
        const foundPost = posts.find(({ id }) => id === postId) as Post;
        return PostsActions.loadPostDetailSuccess({ post: foundPost });
      })
    )
  );

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.updatePost),
      withLatestFrom(this.store.pipe(select(PostsSelectors.getPosts))),
      map(([{ post }, posts]) => {
        const newPosts = [...posts];
        const foundIndex = newPosts.findIndex(({ id }) => id === post.id);
        newPosts[foundIndex] = { ...post };
        console.log(newPosts);

        return PostsActions.updatePostSuccess({ posts: newPosts });
      })
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
