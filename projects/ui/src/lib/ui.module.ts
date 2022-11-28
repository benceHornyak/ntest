import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FilterComponent],
  imports: [MatSelectModule, MatFormFieldModule, FormsModule, CommonModule],
  exports: [FilterComponent],
})
export class UiModule {}
