import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeViewComponent {

}
