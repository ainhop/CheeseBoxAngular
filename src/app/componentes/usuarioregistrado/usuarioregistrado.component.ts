import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interfaces';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarioregistrado',
  templateUrl: './usuarioregistrado.component.html',
  styleUrls: ['./usuarioregistrado.component.css'],
})
export class UsuarioregistradoComponent implements OnInit {
  usuario: Usuario;
  constructor(
    private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const usuario = await this.usuarioService.getById();
    this.usuario = usuario;
  }

  obtenerImagen(): string {
    if (this.usuario && this.usuario.imagen) {
      return `url('${this.usuario.imagen}')`;
    } else {
      return `url('../../../assets/img-defecto.png')`;
    }
  }
}
