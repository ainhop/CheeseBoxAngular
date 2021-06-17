import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;
  form: any[];

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
      ]),

      password: new FormControl('', [
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
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
    const response = await this.usuariosService.registro(this.formulario.value);

    if (response['error']) {
      Swal.fire('');
    } else {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Te has registrado correctamente',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
