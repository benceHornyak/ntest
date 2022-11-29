import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from 'projects/ui/src/public-api';
import { StoreModule } from '@ngrx/store';
import * as fromPosts from './+state';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './+state';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    HttpClientModule,
    UiModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
    AsyncPipe,
  ],
  exports: [PostsComponent],
})
export class PostsModule {}
