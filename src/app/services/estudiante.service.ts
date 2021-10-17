import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante.models';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private listaEstudiante: Estudiante[] = [];
  private estudiantes = new BehaviorSubject<Estudiante[]>([]);

  constructor() { }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.estudiantes.asObservable();
  }

  getEstudianteById(id: number): Estudiante | undefined {
    return this.listaEstudiante.find(e => e.id === id);
  }

  agregarEstudiante(estudiante: Estudiante){
    this.listaEstudiante = [...this.listaEstudiante, estudiante];
    this.estudiantes.next(this.listaEstudiante);
  }

  editarEstudiante(id: number, estudianteEdit: Estudiante){
    let estuduante = this.listaEstudiante.find(e => e.id === id);
    if(estuduante){
      estuduante.nombre = estudianteEdit.nombre;
      estuduante.apellido = estudianteEdit.apellido;
      estuduante.estado = estudianteEdit.estado;
    }
    this.estudiantes.next(this.listaEstudiante);
  }

  eliminarEstudiante(id: number){
    let index = this.listaEstudiante.findIndex(e => e.id === id);
    this.listaEstudiante.splice(index, 1);
    this.estudiantes.next(this.listaEstudiante);
  }

}
