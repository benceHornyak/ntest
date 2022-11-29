import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { PostDetailCardComponent } from './post-detail-card/post-detail-card.component';

@NgModule({
  declarations: [FilterComponent, TreeViewComponent, PostDetailCardComponent],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [FilterComponent, TreeViewComponent, PostDetailCardComponent],
})
export class UiModule {}
