import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceconfirmComponent } from './surfaceconfirm.component';

describe('SurfaceconfirmComponent', () => {
  let component: SurfaceconfirmComponent;
  let fixture: ComponentFixture<SurfaceconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
