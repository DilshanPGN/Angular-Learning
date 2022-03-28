import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingStarComponent } from './glowing-star.component';

describe('GlowingStarComponent', () => {
  let component: GlowingStarComponent;
  let fixture: ComponentFixture<GlowingStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlowingStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
