import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { Receta } from 'src/app/interfaces/recetas.interfaces';
import { ProductosService } from 'src/app/services/productos.service';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  arrQuesoFav: Producto[]
  arrRecetaFav: Receta[]
  show: boolean = true;
  
 
  constructor(private ProductosService: ProductosService, private RecetaService: RecetasService) {
   
  }

  ngOnInit(): void {
    this.ProductosService.getById(1)
      .then(response => {
        this.arrQuesoFav = response
      })
      .catch(error => console.log(error))
    
    
    this.RecetaService.getById(1)
      .then(response => {
        
        this.arrRecetaFav = response

      })
      .catch(error => console.log(error))
  }


}