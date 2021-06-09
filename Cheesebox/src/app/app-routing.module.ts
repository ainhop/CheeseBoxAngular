import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaClientesComponent } from './componentes/area-clientes/area-clientes.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { DetalleQuesoComponent } from './componentes/detalle-queso/detalle-queso.component';
import { DetalleRecetasComponent } from './componentes/detalle-recetas/detalle-recetas.component';
import { FormularioAddQuesoComponent } from './componentes/formulario-add-queso/formulario-add-queso.component';
import { FormularioAddRecetasComponent } from './componentes/formulario-add-recetas/formulario-add-recetas.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { ListaQuesosComponent } from './componentes/lista-quesos/lista-quesos.component';
import { ListaRecetasComponent } from './componentes/lista-recetas/lista-recetas.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: BuscadorComponent },
  { path: 'registrar', pathMatch: 'full', component: FormularioRegistroComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'clientes', pathMatch: 'full', component: AreaClientesComponent },
  { path: 'quesos', pathMatch: 'full', component: ListaQuesosComponent },
  { path: 'recetas', pathMatch: 'full', component: ListaRecetasComponent },
  { path: 'update/queso', pathMatch: 'full', component: FormularioAddQuesoComponent },
  { path: 'update/recetas', pathMatch: 'full', component: FormularioAddRecetasComponent },
  { path: 'queso/detalle', pathMatch: 'full', component: DetalleQuesoComponent },
  { path: 'receta/detalle', pathMatch: 'full', component: DetalleRecetasComponent },
  { path: '**', redirectTo: '/'}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
