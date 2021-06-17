import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

declare var Swal;

@Component({
  selector: 'app-formulario-add-queso',
  templateUrl: './formulario-add-queso.component.html',
  styleUrls: ['./formulario-add-queso.component.css'],
})
export class FormularioAddQuesoComponent implements OnInit {
  formulario: FormGroup;
  files;

  constructor(
    private ProductosService: ProductosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      tipoLeche: new FormControl('', [Validators.required]),
      origen: new FormControl('', [Validators.required]),
      caracteristicas: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),

      tipo: new FormControl('', [Validators.required]),
      imagen: new FormControl('', []),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
<<<<<<< HEAD
    
    let fd = new FormData()
    fd.append('imagen', this.files[0])
    fd.append('nombre', this.formulario.value.nombre)
    fd.append('descripcion', this.formulario.value.descripcion)
    fd.append('tipoLeche', this.formulario.value.tipoLeche)
    fd.append('origen', this.formulario.value.origen)
    fd.append('caracteristicas', this.formulario.value.caracteristicas)
    fd.append('color', this.formulario.value.color)
    fd.append('tipo', this.formulario.value.tipo)
    console.log(fd)
    const response = await this.ProductosService.create(fd);
    
=======
    this.formulario.value.imagen = this.files[0];
    console.log(this.formulario.value);
    const response = await this.ProductosService.create(this.formulario.value);

>>>>>>> develop
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
    console.log(this.files)
  }
  checkControl(controlEmail, validatorEmail) {
    return (
      this.formulario.get(controlEmail).hasError(validatorEmail) &&
      this.formulario.get(controlEmail).touched
    );
  }
}
