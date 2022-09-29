import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpinturaComponent } from './colorpintura.component';

describe('ColorpinturaComponent', () => {
  let component: ColorpinturaComponent;
  let fixture: ComponentFixture<ColorpinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorpinturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
