import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PostsActions from '../+state';
import * as PostsSelector from '../+state';
import { Post } from '../models';

@Component({
  selector: 'lib-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  readonly postDetail$ = this.store.select(PostsSelector.getPostDetail);
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(PostsActions.loadPostDetail({ postId }));
  }

  navigateBack() {
    this.router.navigate(['posts']);
  }

  saveNewPost(newPost: Post) {
    this.store.dispatch(PostsActions.updatePost({ post: newPost }));
  }
}
