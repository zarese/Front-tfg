import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuelosComponent } from './update-suelos.component';

describe('UpdateSuelosComponent', () => {
  let component: UpdateSuelosComponent;
  let fixture: ComponentFixture<UpdateSuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
