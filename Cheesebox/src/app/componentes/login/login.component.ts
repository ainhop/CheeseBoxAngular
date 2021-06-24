import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;


  constructor(private usuariosService: UsuariosService, private router: Router) {
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
      Swal.fire('error de login', 'error');
    } else {
      Swal.fire({
        title: 'Vamos allá',
        imageUrl: 'https://media.giphy.com/media/rqiUImqdbTig0/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
      localStorage.setItem('token', response['token']);
    }
    this.router.navigate(['../']);
  }
}
