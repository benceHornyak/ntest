import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeFilterOption, loadPosts, State } from './+state';
import { FilterOptions } from './models';
import * as selectors from './+state';

@Component({
  selector: 'lib-posts',
  template: `
    <lib-filter
      [filters]="filters"
      [selectedFilter]="selectedFilterOption$ | async"
      (filterSelectChange)="groupingChange($event)"
    ></lib-filter>
    <lib-tree-view
      [postNodes]="postNodes$ | async"
      (openNodeClick)="navigateToPostWithId($event)"
    ></lib-tree-view>
  `,
  styles: [],
})
export class PostsComponent implements OnInit {
  readonly filters = ['author', 'location', 'week'] as FilterOptions[];
  readonly selectedFilterOption$ = this.store.select(
    selectors.currentFilterOption
  );

  readonly postNodes$ = this.store.select(selectors.postNodes);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  groupingChange(filterOption: FilterOptions) {
    this.store.dispatch(changeFilterOption({ filterOption }));
  }

  navigateToPostWithId(id: number) {
    console.log(id);
  }
}
