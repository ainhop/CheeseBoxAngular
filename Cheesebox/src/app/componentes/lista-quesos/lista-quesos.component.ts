import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

declare var Swal;

@Component({
  selector: 'app-lista-quesos',
  templateUrl: './lista-quesos.component.html',
  styleUrls: ['./lista-quesos.component.css'],
})
export class ListaQuesosComponent implements OnInit {
  paginaActual: number;
  numPaginas: number;
  limitePaginas: number;
  arrProducto: Producto[];
  arrQuesosFavoritos: any[];

  constructor(
    private ProductosService: ProductosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.paginaActual = 1;
    this.arrProducto = [];
  }

  ngOnInit(): void {
    this.ProductosService.getAll(this.paginaActual)
      .then((response) => {
        console.log(response);
        this.arrProducto = response;
        this.limitePaginas = response.length;
      })
      .catch((error) => console.log(error));
  }

  async onClickBtn(siguiente: boolean) {
    this.limitePaginas = 1;
    this.limitePaginas = await this.ProductosService.paginator();
    this.paginaActual = siguiente
      ? this.paginaActual + 1
      : this.paginaActual - 1;
    this.ProductosService.getAll(this.paginaActual)
      .then((response) => (this.arrProducto = response))
      .catch((error) => console.log(error));
  }

  goToDetails(item: any): void {
    this.router.navigate(['quesos', item.id]);
  }

  handleSearch(value: string) {
    this.ProductosService.getByItem(value)
      .then((response) => {
        this.arrProducto = response;
      })

      .catch((error) => console.log(error));
  }
  filtroValor = '';

  // async onClick(siguiente: boolean) {
  //   if (siguiente) {
  //     this.paginaActual++;
  //   } else {
  //     this.paginaActual--;
  //   }
  //   this.arrProducto = await this.ProductosService.getAll(this.paginaActual);
  // }

  RecFav(pProducto): void {
    this.ProductosService.editFav(pProducto.id)
      .then((response) => {
        if (response['error']) {
          Swal.fire({
            title: '!Ups...! ',
            text: 'Este queso ya esta entre tus favoritos',
            imageUrl: 'https://media.giphy.com/media/qCPxDmsoBuopO/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
          pProducto.favorito = false;
        } else {
          Swal.fire({
            title: '¡Genial!...',
            text: ' has incluido este queso en tus favoritos',
            imageUrl: 'https://media.giphy.com/media/97ZWlB7ENlalq/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
          pProducto.favorito = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DeleteFav(pProducto): void {
    this.ProductosService.deleteFav(pProducto.id)
      .then((response) => {
        if (response['error']) {
          Swal.fire({
            title: '!Ups...! ',
            text: 'Este queso ya esta entre tus favoritos',
            imageUrl: 'https://media.giphy.com/media/qCPxDmsoBuopO/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
          pProducto.favorito = false;
        } else {
          Swal.fire({
            title: '¡Genial!...',
            text: ' has incluido este queso en tus favoritos',
            imageUrl: 'https://media.giphy.com/media/97ZWlB7ENlalq/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          });
          pProducto.favorito = false;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
