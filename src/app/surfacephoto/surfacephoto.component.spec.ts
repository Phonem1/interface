import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacephotoComponent } from './surfacephoto.component';

describe('SurfacephotoComponent', () => {
  let component: SurfacephotoComponent;
  let fixture: ComponentFixture<SurfacephotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacephotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
