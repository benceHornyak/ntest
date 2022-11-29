import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from 'projects/ui/src/public-api';
import { StoreModule } from '@ngrx/store';
import * as fromPosts from './+state';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './+state';
import { AsyncPipe, NgIf } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent],
  imports: [
    HttpClientModule,
    UiModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
    AsyncPipe,
    PostsRoutingModule,
    NgIf,
  ],
  exports: [PostsComponent],
})
export class PostsModule {}
