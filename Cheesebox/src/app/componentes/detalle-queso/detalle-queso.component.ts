import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-queso',
  templateUrl: './detalle-queso.component.html',
  styleUrls: ['./detalle-queso.component.css'],
})
export class DetalleQuesoComponent implements OnInit {
  producto: Producto;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private productoService: ProductosService
  ) {}

  async ngOnInit(): Promise<void> {
    let sub = this.activatedroute.params.subscribe(async (params: Params) => {
      let IdQueso = params['idQueso'];
      this.producto = await this.productoService.getById(IdQueso);
      // console.log(this.producto);
    });
  }

  // const id = this.activatedroute.snapshot.paramMap.get('id');
  // const producto = await this.productoService.getById(id);
  // console.log(producto);
  // this.producto = producto;
}
