/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoListarComponent } from './vehiculo-listar.component';

describe('VehiculoListarComponent', () => {
  let component: VehiculoListarComponent;
  let fixture: ComponentFixture<VehiculoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiculoListarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListarComponent);
    component = fixture.componentInstance;
    component.vehiculos = [
      { marca: 'Toyota', linea: 'Corolla', modelo: 2020 },
      { marca: 'Honda', linea: 'Civic', modelo: 2019 },
      { marca: 'Ford', linea: 'Focus', modelo: 2018 }
    ];
    fixture.detectChanges();
  });

  it('should create a table with three rows plus header', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });
});
