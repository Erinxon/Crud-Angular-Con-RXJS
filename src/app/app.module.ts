import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListarComponent } from './pages/alumnos/listar/listar.component';
import { AgregarComponent } from './pages/alumnos/agregar/agregar.component';
import { EditarComponent } from './pages/alumnos/editar/editar.component';
import { EstadoPipe } from './pipes/estado.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    MenuComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EstadoPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
