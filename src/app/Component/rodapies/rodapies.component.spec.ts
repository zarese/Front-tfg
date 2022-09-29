import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapiesComponent } from './rodapies.component';

describe('RodapiesComponent', () => {
  let component: RodapiesComponent;
  let fixture: ComponentFixture<RodapiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
