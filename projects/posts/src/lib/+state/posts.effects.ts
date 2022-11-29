import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as PostsActions from './posts.actions';
import { PostsService } from '../posts.service';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      concatMap(() =>
        this.postsService
          .getPosts()
          .pipe(map((posts) => PostsActions.loadPostsSuccess({ posts: posts })))
      )
    );
  });

  groupInitially$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.loadPostsSuccess),
      map(() => PostsActions.initialGrouping())
    );
  });

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
