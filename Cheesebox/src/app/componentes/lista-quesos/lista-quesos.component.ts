import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-quesos',
  templateUrl: './lista-quesos.component.html',
  styleUrls: ['./lista-quesos.component.css'],
})
export class ListaQuesosComponent implements OnInit {
  arrProducto: Producto[];
  currentPage: number;

  constructor(private ProductosService: ProductosService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.ProductosService.getAll()
<<<<<<< HEAD
      .then((response) => {
        this.arrProducto = response;
      })
      .catch((error) => console.log(error));
=======
      .then(response => {
        this.arrProducto = response
    
      })
      .catch(error => console.log(error))
  }

  handleSearch(value: string) {
    this.ProductosService.getByItem(value)
     
      .then(response => {
      
        this.arrProducto = response
      })
      
    
     .catch (error => console.log(error))
>>>>>>> develop
  }
  filtroValor = "";
  


  changePage(siguiente: boolean) {
    this.currentPage = siguiente ? this.currentPage + 1 : this.currentPage - 1;

    this.ProductosService.getAll()
      .then((response) => (this.arrProducto = response))
      .catch((error) => console.log(error));
  }
}

