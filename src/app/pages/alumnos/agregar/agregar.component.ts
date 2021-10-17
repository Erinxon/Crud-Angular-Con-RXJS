import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante.models';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    });
  }

  onSubmit(): void {
    const estudiante: Estudiante = {
      id: this.getLastId(),
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estado: true
    }
    this.estudianteService.agregarEstudiante(estudiante);
    this.form.reset();
  }

  private getLastId(): number {
    let id = 0;
    this.estudianteService.getEstudiantes().subscribe(e => {
      if(e.length > 0){
        id = e.reverse()[0].id + 1;
      }else{
        id = 1;
      }    
    })
    return id;
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }



}
