import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrabajadoresComponent } from './add-trabajadores.component';

describe('AddTrabajadoresComponent', () => {
  let component: AddTrabajadoresComponent;
  let fixture: ComponentFixture<AddTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrabajadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
