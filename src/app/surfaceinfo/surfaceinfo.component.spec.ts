import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceinfoComponent } from './surfaceinfo.component';

describe('SurfaceinfoComponent', () => {
  let component: SurfaceinfoComponent;
  let fixture: ComponentFixture<SurfaceinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
