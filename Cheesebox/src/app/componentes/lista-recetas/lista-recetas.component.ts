import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/interfaces/recetas.interfaces';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent implements OnInit {
  arrRecetas: Receta[];

  constructor(private RecetasService: RecetasService) {
    this.RecetasService.getAll()
      .then((response) => {
        this.arrRecetas = response;
      })
      .catch((error) => console.log(error));
  }

  ngOnInit(): void {
    
   }
 
   handleSearch(value: string) {
    this.RecetasService.getByItem(value)
      .then(response =>
      { this.arrRecetas = response })
     
    .catch (error => console.log(error))
  }
  filtroValor = "";
}
