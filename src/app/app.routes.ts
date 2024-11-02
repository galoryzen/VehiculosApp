// app.routes.ts o app-routing.module.ts
import { Routes } from '@angular/router';
import { VehiculoListarComponent } from './vehiculo/vehiculo-listar/vehiculo-listar.component';

export const routes: Routes = [
    { path: '', component: VehiculoListarComponent },  // Carga VehiculoListarComponent en la página principal
];
