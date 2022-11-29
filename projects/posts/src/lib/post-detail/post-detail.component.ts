import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'lib-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  id$!: Observable<number>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id$ = this.route.params.pipe(map(({ id }) => id));
    this.id$.subscribe(console.log);
  }
}
