import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';

declare var Swal;
@Component({
  selector: 'app-editar-queso',
  templateUrl: './editar-queso.component.html',
  styleUrls: ['./editar-queso.component.css']
})
export class EditarQuesoComponent implements OnInit {

  formulario: FormGroup;
  files;
  producto: any;
 

  constructor(
    private ProductosService: ProductosService, private activatedRoute: ActivatedRoute, private router: Router) {
    
    
 
  }

  ngOnInit(): void {
    let sub = this.activatedRoute.params.subscribe(async(params: Params) => {
      let IdQueso = params['idQueso'];
      this.producto = await this.ProductosService.getById(IdQueso)
      console.log(this.producto)

      this.formulario = new FormGroup({
        imagen: new FormControl(this.producto.imagen, []),
        nombre: new FormControl(this.producto.nombre
        , [Validators.required,  Validators.minLength(2)]),
        descripcion: new FormControl(this.producto.descripcion, [Validators.required, Validators.minLength(2)]),
        tipoLeche: new FormControl(this.producto.tipoLeche, [Validators.required, Validators.minLength(2)]),
        origen: new FormControl(this.producto.origen, [Validators.required, Validators.minLength(2)]),
        curiosidades: new FormControl(this.producto.curiosidades, [Validators.required, Validators.minLength(2)]),
        color: new FormControl(this.producto.color, [Validators.required, Validators.minLength(2)]),
      });
      
    })
  }
  

  async onSubmit() {
      this.activatedRoute.params.subscribe(async (params: Params) => {
      let IdQueso = params['idQueso'];
      this.producto = await this.ProductosService.getById(IdQueso)
      let fd = new FormData();
      fd.append('imagen', this.files[0]);
      fd.append('nombre', this.formulario.value.nombre);
      fd.append('descripcion', this.formulario.value.descripcion);
      fd.append('tipoLeche', this.formulario.value.tipoLeche);
      fd.append('origen', this.formulario.value.origen);
      fd.append('curiosidades', this.formulario.value.curiosidades);
      fd.append('color', this.formulario.value.color);
      console.log(fd);
      const response = await this.ProductosService.update(IdQueso, fd);
      if (response['affectedRows'] === 1) {
        this.router.navigate(['/clientes']);
      }
      
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

}

