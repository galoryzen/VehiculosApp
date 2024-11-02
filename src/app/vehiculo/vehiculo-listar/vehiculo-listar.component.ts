import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  marcaCounts: { [key: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      this.marcaCounts = data.reduce((counts: { [key: string]: number }, vehiculo) => {
        counts[vehiculo.marca] = (counts[vehiculo.marca] || 0) + 1;
        return counts;
      }, {});

    });
  }
}
