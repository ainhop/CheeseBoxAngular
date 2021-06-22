import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;


  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
      ]),
      password: new FormControl('', [
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
      ]),
    });
  }

  ngOnInit(): void { }

  checkControl(controlEmail, validatorEmail) {

    return (
      this.formulario.get(controlEmail).hasError(validatorEmail) &&
      this.formulario.get(controlEmail).touched
    );
  }

  async onSubmit() {
    const response = await this.usuariosService.login(this.formulario.value);
    if (response['error']) {
      Swal.fire('Error de login', response['error'], 'error');
    } else {
      Swal.fire('Login Correcto, correcto, todo correcto');
    }
  }
}


