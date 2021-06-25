import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-quesos',
  templateUrl: './lista-quesos.component.html',
  styleUrls: ['./lista-quesos.component.css'],
})
export class ListaQuesosComponent implements OnInit {
  public paginaActual: number;
  numPaginas: any;
  arrProducto: Producto[];
  public page: number;
  limitePaginas: any;
  currentPage: number;
  arrQuesosFavoritos: any[]
 

  constructor(
    private ProductosService: ProductosService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
   
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

  async onClickBtn(siguiente: boolean) {
    this.limitePaginas = 1;
    this.limitePaginas = await this.ProductosService.paginator();
    console.log(this.limitePaginas);
    this.currentPage = siguiente ? (this.currentPage + 1) : (this.currentPage - 1);
    console.log(this.currentPage);
    this.ProductosService.getAll(this.currentPage)
      .then(response => this.arrProducto = response)
      .catch(error => console.log(error))
  };

 
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

  productoFav($event):void{
    if ($event) {
      const valor = this.ProductosService.editFav;
    
      console.log(valor)
 
    } else {
      const falser = this.ProductosService.deleteFav
      console.log(falser)
    }

  }

  // loadPage(page: number) {
  //   if (page !== this.previousPage) {
  //     this.previousPage = page;
  //     this.fillStudents(this.page-1);
  //   }
  // }
}
  // Paginator(): string{
  //   if (this.arrProducto ==) {
  //     return ` <div class="botones" *ngIf="arrProducto.length >= 6">
  //     <div class="separador">
  //     </div>
  //       <nav aria-label="...">
  //         <ul class="pagination">
  //           <li class="page-item " [disabled]="paginaActual === 1" (click)="onClick(false)">
  //             Previo
  //           </li>
  //           <li class="page-item">{{paginaActual}} / {{arrProducto.length}}</li>
  //           <li class="page-item"  (click)="onClick(true)" [disabled]="paginaActual === numPaginas"> 
  //           Siguiente
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>`
  //   } else {
  //     return `url('../../../assets/img-defecto.png')`
  //   }
  // }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return this.ProductosService.getById();
//   }


