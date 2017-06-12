import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfacewelcomeComponent } from './surfacewelcome.component';

describe('SurfacewelcomeComponent', () => {
  let component: SurfacewelcomeComponent;
  let fixture: ComponentFixture<SurfacewelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfacewelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfacewelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
