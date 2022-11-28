import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostsComponent],
  imports: [HttpClientModule],
  exports: [PostsComponent],
})
export class PostsModule {}
