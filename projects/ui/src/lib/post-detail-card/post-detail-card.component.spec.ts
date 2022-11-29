import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailCardComponent } from './post-detail-card.component';

describe('PostDetailCardComponent', () => {
  let component: PostDetailCardComponent;
  let fixture: ComponentFixture<PostDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
