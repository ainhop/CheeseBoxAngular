import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interfaces';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-area-clientes',
  templateUrl: './area-clientes.component.html',
  styleUrls: ['./area-clientes.component.css']
})
export class AreaClientesComponent implements OnInit {
  usuario: Usuario;
  imagen: any;

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private usuariosService:UsuariosService) {
    const usuarioId = this.activatedRouter.snapshot.paramMap.get('id')
    console.log(usuarioId)
    this.usuariosService.getById(usuarioId)
      .then((result) => {
        console.log(result)
      })
    .catch((error)=>{console.log(error)})
  }

  ngOnInit(): void {
  }

  goToEdit(usuario:any): void  {
    this.router.navigate(['editarDatos',usuario] )
  }



  
}
