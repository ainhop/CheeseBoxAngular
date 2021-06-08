import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

// declare var Swal;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
      ]),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    const response = await this.usuariosService.login(this.formulario.value);
    if (response['error']) {
    } else {
    }
  }
}

// if (response['error']) {
//  Swal.fire('Error de login', response['error'], 'error');
//     } else {
//       Swal.fire('Login Correcto', 'Ya puedes disfrutar de la aplicación', 'success');
