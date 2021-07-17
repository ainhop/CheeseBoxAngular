import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receta } from 'src/app/interfaces/recetas.interfaces';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-detalle-recetas',
  templateUrl: './detalle-recetas.component.html',
  styleUrls: ['./detalle-recetas.component.css'],
})
export class DetalleRecetasComponent implements OnInit {
  receta: Receta;

  constructor(
    private activateroute: ActivatedRoute,
    private router: Router,
    private recetaService: RecetasService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.activateroute.snapshot.paramMap.get('id');
    const receta = await this.recetaService.getById(id);
    this.receta = receta
    console.log(receta)
    
    
     console.log(this.receta)
  }


}
