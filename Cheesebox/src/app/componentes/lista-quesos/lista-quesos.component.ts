import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-quesos',
  templateUrl: './lista-quesos.component.html',
  styleUrls: ['./lista-quesos.component.css'],
})
export class ListaQuesosComponent implements OnInit {
  paginaActual: number;
  numPaginas: number;
  arrProducto: Producto[];

  constructor(
    private ProductosService: ProductosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.paginaActual = 1;
    this.arrProducto = []
  }

  ngOnInit(): void {
    this.ProductosService.getAll(this.paginaActual)
      .then((response) => {
        this.arrProducto = response;
        this.numPaginas = response.length;
      })
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

  async onClick(siguiente: boolean) {
    if (siguiente) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
    this.arrProducto = await this.ProductosService.getAll(this.paginaActual);
  }
}
