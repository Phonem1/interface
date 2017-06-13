import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacepolicyComponent } from './surfacepolicy.component';

describe('SurfacepolicyComponent', () => {
  let component: SurfacepolicyComponent;
  let fixture: ComponentFixture<SurfacepolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacepolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
