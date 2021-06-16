import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
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
  files;

  constructor(
    private ProductosService: ProductosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      tipoLeche: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      origen: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      caracteristicas: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      color: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      tipo: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      imagen: new FormControl('', [
      ]),

    })
  }
  
  ngOnInit(): void {
  }


  async onSubmit() {
    this.formulario.value.imagen = this.files[0]
    console.log(this.formulario.value)
    const response = await this.ProductosService.create(this.formulario.value);
    
    if (response['affectedRows'] === 1) {
      Swal.fire('Registro completado con éxito');
      this.router.navigate(['/quesos']);
    }
    // let fd = new FormData();
    // fd.append('imagen', this.files[0]);
    // this.ProductosService.create(fd).then(result => {
    //   this.router.navigate(['']);
    // })
  }

  onChange($event) {
    this.files = $event.target.files;
  }
  checkControl(controlEmail, validatorEmail) {

    return (
      this.formulario.get(controlEmail).hasError(validatorEmail) &&
      this.formulario.get(controlEmail).touched
    );
  }
}
