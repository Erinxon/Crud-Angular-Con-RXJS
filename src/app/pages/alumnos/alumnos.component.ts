import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.models';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaEstudiantes!: Estudiante[];
  busqueda: string = '';
  constructor(private estudianteService: EstudianteService) {
    
  }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(e => {
      this.listaEstudiantes = e;
    })
  }

  buscar(): void {
    if(this.busqueda.length > 0){
      const filter = this.listaEstudiantes.filter(e => e.nombre.match(this.busqueda))
      if(filter.length > 0){
        this.listaEstudiantes = filter;
      }
    }
  }

  limpiar(): void {
    this.busqueda = '';
    this.getEstudiantes();
  }


}
