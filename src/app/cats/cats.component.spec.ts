import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPullComponent } from './cats.component';

describe('ApiPullComponent', () => {
  let component: ApiPullComponent;
  let fixture: ComponentFixture<ApiPullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
