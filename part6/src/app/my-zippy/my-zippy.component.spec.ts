import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyZippyComponent } from './my-zippy.component';

describe('MyZippyComponent', () => {
  let component: MyZippyComponent;
  let fixture: ComponentFixture<MyZippyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyZippyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
