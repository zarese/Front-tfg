import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipossuelosComponent } from './tipossuelos.component';

describe('TipossuelosComponent', () => {
  let component: TipossuelosComponent;
  let fixture: ComponentFixture<TipossuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipossuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipossuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
