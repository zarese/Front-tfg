import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrabajadoresComponent } from './update-trabajadores.component';

describe('UpdateTrabajadoresComponent', () => {
  let component: UpdateTrabajadoresComponent;
  let fixture: ComponentFixture<UpdateTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrabajadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
