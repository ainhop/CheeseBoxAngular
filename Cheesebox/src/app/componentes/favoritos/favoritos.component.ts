import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { Receta } from 'src/app/interfaces/recetas.interfaces';
import { ProductosService } from 'src/app/services/productos.service';
import { RecetasService } from 'src/app/services/recetas.service';

declare var Swal;

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  arrQuesoFav: Producto[];
  arrRecetaFav: Receta[];
  Producto: Producto;
  // Pendiente preguntar (estabamos utilizando ArrayQuesoFav)
  show: boolean = true;

  constructor(
    private ProductosService: ProductosService,
    private RecetaService: RecetasService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ProductoId = this.activatedRouter.snapshot.paramMap.get('id');

    this.ProductosService.getFavAll(ProductoId)
      .then((response) => {
        this.arrQuesoFav = response;
      })
      .catch((error) => console.log(error));

    this.RecetaService.getFavAll(ProductoId)
      .then((response) => {
        this.arrRecetaFav = response;
      })
      .catch((error) => console.log(error));
  }

  goToEdit(item: any): void {
    this.router.navigate(['editarQueso', item.id]);
  }

  goToDelete(item: any) {
    const deleteId = this.ProductosService.delete(item.id)

      .then((response) => {
        this.Producto = response;
      })

      .catch((error) => console.log(error));

    console.log(deleteId);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Estas seguro que quieres quitar de favoritos este queso?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('Queso Eliminado!');
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Conservas tu queso');
        }
      });
    this.router.navigate(['/clientes']);
  }
}
