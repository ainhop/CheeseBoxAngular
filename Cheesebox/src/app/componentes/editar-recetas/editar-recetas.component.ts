import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-editar-recetas',
  templateUrl: './editar-recetas.component.html',
  styleUrls: ['./editar-recetas.component.css']
})
export class EditarRecetasComponent implements OnInit {
  formulario: FormGroup;
  files;
  receta: any;
  constructor( private activateRoute: ActivatedRoute, private recetaService: RecetasService, private router: Router) { }

  ngOnInit(): void {
    let sub = this.activateRoute.params.subscribe(async(params: Params) => {
      let idReceta = params['idReceta'];
      this.receta = await this.recetaService.getById(idReceta)
      console.log(this.receta)

      this.formulario = new FormGroup({
        imagen: new FormControl(this.receta.imagen, []),
        nombre: new FormControl(this.receta.nombre
        , [Validators.required,  Validators.minLength(2)]),
        quesoUtilizado: new FormControl(this.receta.quesoUtilizado, [Validators.required, Validators.minLength(2)]),
        ingredientes: new FormControl(this.receta.ingredientes, [Validators.required, Validators.minLength(2)]),
        tiempo: new FormControl(this.receta.tiempo, [Validators.required, Validators.minLength(2)]),
        raciones: new FormControl(this.receta.raciones, [Validators.required, Validators.minLength(2)]),
        elaboracion: new FormControl(this.receta.elaboracion, [Validators.required, Validators.minLength(2)]),
      });
      
    })
  }
  
  async onSubmit() {
    this.activateRoute.params.subscribe(async (params: Params) => {
    let IdQueso = params['idQueso'];
    this.receta = await this.recetaService.getById(IdQueso)
    let fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre', this.formulario.value.nombre);
    fd.append('quesoUtilizado', this.formulario.value.quesoUtilizado);
    fd.append('ingredientes', this.formulario.value.ingredientes);
    fd.append('tiempo', this.formulario.value.tiempo);
    fd.append('raciones', this.formulario.value.raciones);
    fd.append('elaboracion', this.formulario.value.elaboracion);
   

    console.log(fd);
    const response = await this.recetaService.update(IdQueso, fd);
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
