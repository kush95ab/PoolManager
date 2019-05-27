import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlorineValComponent } from './chlorine-val.component';

describe('ChlorineValComponent', () => {
  let component: ChlorineValComponent;
  let fixture: ComponentFixture<ChlorineValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChlorineValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlorineValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
