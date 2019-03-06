import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmileComponent } from './ngx-smile.component';

describe('NgxSmileComponent', () => {
  let component: NgxSmileComponent;
  let fixture: ComponentFixture<NgxSmileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSmileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
