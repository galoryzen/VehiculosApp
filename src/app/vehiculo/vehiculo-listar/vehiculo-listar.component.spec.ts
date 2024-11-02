/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiculoListarComponent } from './vehiculo-listar.component';
import { provideHttpClient } from '@angular/common/http';

describe('VehiculoListarComponent', () => {
  let component: VehiculoListarComponent;
  let fixture: ComponentFixture<VehiculoListarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoListarComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListarComponent);
    component = fixture.componentInstance;

    // Simulación de datos
    component.vehiculos = [
      { id: 1, marca: 'Toyota', linea: 'Corolla', referencia: 'XLI', modelo: 2020, kilometraje: 5000, color: 'Blanco', imagen: '' },
      { id: 2, marca: 'Honda', linea: 'Civic', referencia: 'EX', modelo: 2019, kilometraje: 10000, color: 'Negro', imagen: '' },
      { id: 3, marca: 'Ford', linea: 'Focus', referencia: 'SE', modelo: 2018, kilometraje: 15000, color: 'Azul', imagen: '' }
    ];

    fixture.detectChanges(); // Dispara la detección de cambios
  });

  it('should create a table with three rows plus header', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });
});
