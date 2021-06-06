import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      imagen: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    const response = await this.usuariosService.registro(this.formulario.value);
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Te has registrado correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
