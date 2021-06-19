import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interfaces';


@Component({
  selector: 'app-detalle-queso',
  templateUrl: './detalle-queso.component.html',
  styleUrls: ['./detalle-queso.component.css']
})
export class DetalleQuesoComponent implements OnInit {


  @Input() producto: Producto;

  

  constructor(private httpClient: HttpClient) {
    
    console.log(this.producto);

    }

    
  ngOnInit(): void {
      
    
  }

  

}
