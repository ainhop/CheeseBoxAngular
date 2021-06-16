import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { debounceTime } from 'rxjs/operators';

declare var Swal;

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;
  form: any = {
    nombre: '',
    apellidos: '',
    username: '',
  };

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
      imagen: new FormControl('', [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
    //   const control = this.formulario.get('email');
    //   control.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
    //     console.log(value);
    //   });
  }

  objectLength(object): number {
    if (!object) {
      return 0;
    }
    return Object.keys(object).length;
  }

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName);
  }

  // passwordValidator(form) {
  //   const passwordValue = form.get('password').value;
  //   if (passwordValue === true) return null;
  // }

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
