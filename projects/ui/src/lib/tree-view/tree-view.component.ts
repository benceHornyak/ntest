import { NestedTreeControl } from '@angular/cdk/tree';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PostNode } from 'projects/posts/src/public-api';

@Component({
  selector: 'lib-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent implements OnChanges {
  @Input() postNodes: PostNode[] | null = [];
  @Output() openNodeClick = new EventEmitter<number>();

  treeControl = new NestedTreeControl<PostNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<PostNode>();

  hasChild = (_: number, node: PostNode) =>
    node.children && node.children.length > 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['postNodes'].currentValue) {
      this.dataSource.data = [...(changes['postNodes'].currentValue ?? [])];
    }
  }

  nodeOpenClicked(id: number) {
    this.openNodeClick.emit(id);
  }
}
