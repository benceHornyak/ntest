import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-post-detail-card',
  templateUrl: './post-detail-card.component.html',
  styleUrls: ['./post-detail-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailCardComponent {

}
