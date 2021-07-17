import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from 'src/app/interfaces/recetas.interfaces';
import { RecetasService } from 'src/app/services/recetas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent implements OnInit {
  paginaActual: number;
  numPaginas: number;
  limitePaginas: number;
  arrRecetas: Receta[];

  constructor(
    private RecetasService: RecetasService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public usuariosService: UsuariosService
  ) {
    this.paginaActual = 1;
    this.arrRecetas = [];
  }

  ngOnInit(): void {
    this.RecetasService.getAll(this.paginaActual)
      .then((response) => {
        this.arrRecetas = response;
        this.limitePaginas = response.length;
      })
      .catch((error) => console.log(error));
  }

  async onClickBtn(siguiente: boolean) {
    this.limitePaginas = 1;
    this.limitePaginas = await this.RecetasService.paginator();
    this.paginaActual = siguiente
      ? this.paginaActual + 1
      : this.paginaActual - 1;
    this.RecetasService.getAll(this.paginaActual)
      .then((response) => (this.arrRecetas = response))
      .catch((error) => console.log(error));
  }
  goToDetails(item: any): void {
    this.router.navigate(['recetas', item.id]);
  }

  handleSearch(value: string) {
    this.RecetasService.getByItem(value)
      .then((response) => {
        this.arrRecetas = response;
      })

      .catch((error) => console.log(error));
  }
  filtroValor = '';

  recetaFav(pReceta): void {
    this.RecetasService.editFav(pReceta.id)
      .then((response) => {
        if (response['error']) {
          Swal.fire({
            title: '!Ups...! ',
            text: 'Esta receta ya aparece entre tus favoritas',
            imageUrl: 'https://media.giphy.com/media/qDolXP52Oj5AI/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
        } else {
          Swal.fire({
            title: '¡Genial!...',
            text: ' has incluido esta receta en tus favoritas',
            imageUrl: 'https://media.giphy.com/media/wNDa1OZtvl6Fi/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
          pReceta.favorito = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
