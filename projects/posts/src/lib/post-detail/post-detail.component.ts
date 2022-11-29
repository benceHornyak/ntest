import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PostsActions from '../+state';
import * as PostsSelector from '../+state';

@Component({
  selector: 'lib-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  readonly postDetail$ = this.store.select(PostsSelector.getPostDetail);
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(PostsActions.loadPostDetail({ postId }));
  }
}
