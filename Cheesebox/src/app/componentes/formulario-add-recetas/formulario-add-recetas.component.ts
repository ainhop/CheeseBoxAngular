import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';

declare var Swal;

@Component({
  selector: 'app-formulario-add-recetas',
  templateUrl: './formulario-add-recetas.component.html',
  styleUrls: ['./formulario-add-recetas.component.css'],
})
export class FormularioAddRecetasComponent implements OnInit {
  formulario: FormGroup;
  form: any[];

  files;

  constructor(private RecetasService: RecetasService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      tiempo: new FormControl('', [Validators.required]),

      quesoUtilizado: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      raciones: new FormControl(),
      ingredientes: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      elaboracion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      imagen: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  objectLength(object): number {
    if (!object) {
      return 0;
    }
    return Object.keys(object).length;
  }

  checkControl(controlName, validatorName) {
    return (
      this.formulario.get(controlName).hasError(validatorName) &&
      this.formulario.get(controlName).touched
    );
  }

  async onSubmit() {
    const response = await this.RecetasService.create(this.formulario.value);

    if (response['affectedRows'] === 1) {
      Swal.fire('Receta añadida con éxito');
      this.router.navigate(['/recetas']);
    }
  }
  onChange($event) {
    this.files = $event.target.files;
  }
}
