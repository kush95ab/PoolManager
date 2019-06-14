import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolmanagerProfileComponent } from './poolmanager-profile.component';

describe('PoolmanagerProfileComponent', () => {
  let component: PoolmanagerProfileComponent;
  let fixture: ComponentFixture<PoolmanagerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolmanagerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolmanagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
