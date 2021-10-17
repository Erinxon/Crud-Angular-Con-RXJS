import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.models';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  estudiante!: Estudiante | undefined;
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private service: EstudianteService
  ) {}

  ngOnInit(): void {
    this.makeForm();
    const id = Number(this.activeRouter.snapshot.paramMap.get('id'));
    this.estudiante = this.service.getEstudianteById(id);
    this.form.setValue({
      nombre: this.estudiante?.nombre,
      apellido: this.estudiante?.apellido,
      estado: this.estudiante?.estado,
    });
  }

  makeForm(): void {
    this.form = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      estado: [false, [Validators.required]],
    });
  }

  get nombre() {
    return this.form.get('nombre');
  }
  get apellido() {
    return this.form.get('apellido');
  }

  onSubmit(): void {
    this.estudiante = {
      id: this.getId(),
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estado: this.form.value.estado,
    };
    this.service.editarEstudiante(this.getId(), this.estudiante);
    this.router.navigate(['/'])
    this.form.reset();
  }

  private getId(): number {
    return this.estudiante?.id ? this.estudiante?.id : 0;
  }
}
