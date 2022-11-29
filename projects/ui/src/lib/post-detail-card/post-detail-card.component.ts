import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from 'projects/posts/src/public-api';
import { combineLatest, map, skip, startWith, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-post-detail-card',
  templateUrl: './post-detail-card.component.html',
  styleUrls: ['./post-detail-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailCardComponent implements OnInit, OnDestroy {
  @Input() postDetail!: Post;
  @Output() valueChanges = new EventEmitter<Post>();
  @Output() backClicked = new EventEmitter<void>();
  authorCtrl = new FormControl('');
  locationCtrl = new FormControl('');

  private destroy = new Subject<void>();

  ngOnInit(): void {
    const { location, author } = this.postDetail;

    this.authorCtrl.patchValue(author);
    this.locationCtrl.patchValue(location);

    combineLatest({
      author: this.authorCtrl.valueChanges.pipe(
        startWith(this.authorCtrl.value),
        map((v) => v as string)
      ),
      location: this.locationCtrl.valueChanges.pipe(
        startWith(this.locationCtrl.value),
        map((v) => v as string)
      ),
    })
      .pipe(
        skip(1),
        map((newData) => ({
          ...this.postDetail,
          ...newData,
        })),
        takeUntil(this.destroy)
      )
      .subscribe((v) => this.valueChanges.emit(v));
  }

  goBack() {
    this.backClicked.emit();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
