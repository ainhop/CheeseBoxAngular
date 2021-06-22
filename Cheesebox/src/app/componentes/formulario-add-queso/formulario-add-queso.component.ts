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
  id = null;

  constructor(
    private ProductosService: ProductosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required,  Validators.minLength(2)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(2)]),
      tipoLeche: new FormControl('', [Validators.required, Validators.minLength(2)]),
      origen: new FormControl('', [Validators.required, Validators.minLength(2)]),
      curiosidades: new FormControl('', [Validators.required, Validators.minLength(2)]),
      color: new FormControl('', [Validators.required, Validators.minLength(2)]),
      imagen: new FormControl('', []),
    });
    
    // const navigation = this.router.getCurrentNavigation()
    // this.id = navigation?.extras?.state;
  }

  ngOnInit(): void {}

  async onSubmit() {
    let fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre', this.formulario.value.nombre);
    fd.append('descripcion', this.formulario.value.descripcion);
    fd.append('tipoLeche', this.formulario.value.tipoLeche);
    fd.append('origen', this.formulario.value.origen);
    fd.append('caracteristicas', this.formulario.value.curiosidades);
    fd.append('color', this.formulario.value.color);
    console.log(fd);
    const response = await this.ProductosService.create(fd);

    Swal.fire({
      title: 'Queso subido',
      text: '¡ahora somos fans!',
      imageUrl: 'https://media.giphy.com/media/3XCrktccKK9Pi/giphy.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  onChange($event) {
    this.files = $event.target.files;
    console.log(this.files);
  }
  objectLength(object): number {
    if (!object) {
      return 0;
    }
    return Object.keys(object).length;
  }

  checkControl(controlName, validatorName) {
    return (
      this.formulario.get(controlName).hasError(validatorName) &&
      this.formulario.get(controlName).touched
    );
  }

  goToEdit(item: any): void {
   
    this.router.navigate(['update', item.id])
  }
}
  
