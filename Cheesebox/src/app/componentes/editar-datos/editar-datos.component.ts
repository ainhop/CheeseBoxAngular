import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.component.html',
  styleUrls: ['./editar-datos.component.css']
})
export class EditarDatosComponent implements OnInit {

  formulario: FormGroup;
  form: any[];
  files;
  usuario: any;

  constructor(private usuariosService: UsuariosService,  private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let sub = this.activatedRoute.params.subscribe(async(params: Params) => {
      let IdUsuario = params['idUsuario'];
      this.usuario = await this.usuariosService.getById(IdUsuario)
      console.log(this.usuario)

      this.formulario = new FormGroup({
        imagen: new FormControl(this.usuario.imagen, []),
        nombre: new FormControl(this.usuario.nombre, [Validators.required, Validators.minLength(2)]),
        apellidos: new FormControl(this.usuario.apellidos, []),
        username: new FormControl(this.usuario.username, []),
        email: new FormControl(this.usuario.imagen, []),
        password: new FormControl(this.usuario.imagen, []),
  
      });
      
    })

  }

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
    ;
    if (response['affectedRows'] === 1) {
      this.router.navigate(['/clientes']);
    }
  }
  
}