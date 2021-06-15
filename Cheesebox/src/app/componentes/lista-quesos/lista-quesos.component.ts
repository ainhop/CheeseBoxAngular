import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-quesos',
  templateUrl: './lista-quesos.component.html',
  styleUrls: ['./lista-quesos.component.css']
})
export class ListaQuesosComponent implements OnInit {
  arrProducto: Producto[];
  constructor(private ProductosService: ProductosService ) { }

  ngOnInit(): void {
    this.ProductosService.getAll()
    .then(response => {
      this.arrProducto = response
    
    })
      .catch(error => console.log(error))

  }

}
