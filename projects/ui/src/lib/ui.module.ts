import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
  declarations: [FilterComponent, TreeViewComponent],
  imports: [MatSelectModule, MatFormFieldModule, FormsModule, CommonModule],
  exports: [FilterComponent, TreeViewComponent],
})
export class UiModule {}
