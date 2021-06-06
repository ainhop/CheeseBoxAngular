import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

declare var Swal;

@Component({
  selector: 'app-formulario-add-queso',
  templateUrl: './formulario-add-queso.component.html',
  styleUrls: ['./formulario-add-queso.component.css']
})
export class FormularioAddQuesoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private ProductosService: ProductosService,
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
  
    // const response = await this.ProductosService.registro(this.formulario.value);
    
    // if (response['affectedRows'] === 1) {
    //   Swal.fire('Registro completado con éxito');
    //   this.router.navigate(['/profesores']);
    // }
  }
    
}
