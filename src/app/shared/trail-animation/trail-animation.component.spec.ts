import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailAnimationComponent } from './trail-animation.component';

describe('TrailAnimationComponent', () => {
  let component: TrailAnimationComponent;
  let fixture: ComponentFixture<TrailAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
