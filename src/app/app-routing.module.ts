import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/alumnos/agregar/agregar.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { EditarComponent } from './pages/alumnos/editar/editar.component';

const routes: Routes = [
  {path: '', component: AlumnosComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
