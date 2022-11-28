import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { FilterOptions } from 'projects/posts/src/public-api';

@Component({
  selector: 'lib-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Input() filters!: FilterOptions[];
  @Input() selectedFilter!: FilterOptions | null;
  @Output() filterSelectChange = new EventEmitter<FilterOptions>();

  selectedValueChanged({ value }: MatSelectChange) {
    this.filterSelectChange.emit(value as FilterOptions);
  }
}
