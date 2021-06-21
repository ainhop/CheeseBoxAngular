import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetasService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    const receta = await this.recetaService.getById(id);
    // this.receta = receta;
  }
}
