import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListarComponent } from './vehiculo-listar/vehiculo-listar.component';
import { VehiculoService } from './vehiculo.service';



@NgModule({
  declarations: [
    VehiculoListarComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    VehiculoService,
  ],
  exports: [
    VehiculoListarComponent,
  ]
})
export class VehiculoModule { }
