import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';

declare var Swal;

@Component({
  selector: 'app-formulario-add-recetas',
  templateUrl: './formulario-add-recetas.component.html',
  styleUrls: ['./formulario-add-recetas.component.css']
})
export class FormularioAddRecetasComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private RecetasService:RecetasService ,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
  
    const response = await this.RecetasService.create(this.formulario.value);
    
    if (response['affectedRows'] === 1) {
      Swal.fire('Registro completado con éxito');
      this.router.navigate(['/profesores']);
    }
  }
    
}
