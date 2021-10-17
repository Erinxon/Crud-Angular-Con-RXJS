import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.models';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @Input() estudiantes: Estudiante[] = [];

  constructor(private service: EstudianteService, private router: Router) { }

  ngOnInit(): void {
  }

  editar(id: number): void {
    this.router.navigate(['/editar',id])
  }

  eliminar(id: number): void {
    this.service.eliminarEstudiante(id);
  }


}
