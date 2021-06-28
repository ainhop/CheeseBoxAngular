import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { Receta } from 'src/app/interfaces/recetas.interfaces';
import { ProductosService } from 'src/app/services/productos.service';
import { RecetasService } from 'src/app/services/recetas.service';

declare var Swal;


@Component({
  selector: 'app-subidos',
  templateUrl: './subidos.component.html',
  styleUrls: ['./subidos.component.css']
})
export class SubidosComponent implements OnInit {
  public paginaActual: number;
  arrQuesoUp: Producto[];
  arrRecetaUp: Receta[];
  Producto: Producto;
  Receta: Receta;

  show: boolean = true;
  showCheese: boolean = true;
  showReceta: boolean = true;

  constructor(
    private ProductosService: ProductosService,
    private RecetaService: RecetasService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.ProductosService.showEdit(this.paginaActual)
    .then((response) => {
      console.log(response)
      this.arrQuesoUp = response;

    })
      .catch((error) => console.log(error));
    
      this.RecetaService.showEdit(this.paginaActual)
      .then((response) => {

        this.arrRecetaUp = response;
  
      })
      .catch((error) => console.log(error));

  }

  goToEditProductos(Producto): void {
    this.router.navigate(['editarQueso/',Producto.id]);
  }

  goToEditRecetas(Receta): void {
    this.router.navigate(['editarReceta/',Receta.id]);
    console.log(Receta.id)
  }


  DeleteProducto(pProducto): void {
   const pId=  this.ProductosService.deleteFav(pProducto.id)

  .then((response) => {
    if (response['error']) {
    console.log('error')
    }
    else {
      Swal.fire({
        title: '¡Ups!...',
        text: ' Has eliminado este queso de tus favoritos',
        imageUrl: 'https://media.giphy.com/media/11l0EFkWYWrSKY/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.ProductosService.showEdit(this.paginaActual)
      .then((response) => {
        console.log(response)
        this.arrQuesoUp = response;
  
      })
        .catch((error) => console.log(error));
    }
  })
  .catch((error) => { console.log(error) })
  console.log(pProducto.id)
}

deleteReceta(pReceta): void {
  this.RecetaService.deleteFav(pReceta.id)
.then((response) => {
  if (response['error']) {
  console.log('error')
  }
  else {
    Swal.fire({
      title: '¡Ups!...',
      text: ' Has eliminado tu receta',
      imageUrl: 'https://media.giphy.com/media/11l0EFkWYWrSKY/giphy.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    this.RecetaService.showEdit(this.paginaActual)
      .then((response) => {

        this.arrRecetaUp = response;
  
      })
      .catch((error) => console.log(error));
  
  }
})
.catch((error) => { console.log(error) })

}

}
