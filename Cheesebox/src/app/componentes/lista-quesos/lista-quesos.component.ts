import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-quesos',
  templateUrl: './lista-quesos.component.html',
  styleUrls: ['./lista-quesos.component.css'],
})
export class ListaQuesosComponent implements OnInit {
  pages: Record<number, Producto[]> = {};
  currentPage: number;

  constructor(private ProductosService: ProductosService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.ProductosService.getAll(50)
      .then((response) => {
        this.pages = this.mapResponseToPages(response);
        console.log(this.mapResponseToPages(response));
      })
      .catch((error) => console.log(error));
  }

  // handleSearch(value: string) {
  //   this.ProductosService.getByItem(value)

  //     .then((response) => {
  //       this.pages = response;
  //     })

  //     .catch((error) => console.log(error));
  // }
  // filtroValor = '';

  objectKeys(object): number {
    return Object.keys(object).length;
  }

  changePage(siguiente: boolean) {
    this.currentPage = siguiente ? this.currentPage + 1 : this.currentPage - 1;
  }

  mapResponseToPages(response: Producto[]): Record<number, Producto[]> {
    let currentPage = 1;
    return response.reduce((productObj, product) => {
      if (!productObj[currentPage]) {
        return {
          ...productObj,
          [currentPage]: [product],
        };
      }

      if (productObj[currentPage].length < 6) {
        return {
          ...productObj,
          [currentPage]: [...productObj[currentPage], product],
        };
      }

      currentPage += 1;

      return {
        ...productObj,
        [currentPage]: [product],
      };
    }, {});
  }
}
