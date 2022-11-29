import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, NgIf } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PostDetailCardComponent } from './post-detail-card/post-detail-card.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FilterComponent, TreeViewComponent, PostDetailCardComponent],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [FilterComponent, TreeViewComponent, PostDetailCardComponent],
})
export class UiModule {}
