import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  files;

  constructor(private usuariosService: UsuariosService,  private router: Router) {
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
  onChange($event) {
    this.files = $event.target.files;
    console.log(this.files);
  }
  async onSubmit() {
    const fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre', this.formulario.value.nombre);
    fd.append('apellidos', this.formulario.value.apellidos);
    fd.append('username', this.formulario.value.username);
    fd.append('email', this.formulario.value.email);
    fd.append('password', this.formulario.value.password);
    const response = await this.usuariosService.create(fd);

    Swal.fire({
      title: 'Bienvenid@ amig@ queser@',
      text: '¡Gracias por formar parte de esta familia!',
      imageUrl: 'https://media.giphy.com/media/2hN44iSVpRIt2/giphy.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    }
     
    )
    this.router.navigate(['../']);
  }
}
