import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacehostComponent } from './surfacehost.component';

describe('SurfacehostComponent', () => {
  let component: SurfacehostComponent;
  let fixture: ComponentFixture<SurfacehostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacehostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacehostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
