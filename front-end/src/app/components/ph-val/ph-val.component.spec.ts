import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhValComponent } from './ph-val.component';

describe('PhValComponent', () => {
  let component: PhValComponent;
  let fixture: ComponentFixture<PhValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
