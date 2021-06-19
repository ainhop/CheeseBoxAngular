import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAddQuesoComponent } from './componentes/formulario-add-queso/formulario-add-queso.component';
import { FormularioAddRecetasComponent } from './componentes/formulario-add-recetas/formulario-add-recetas.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListaQuesosComponent } from './componentes/lista-quesos/lista-quesos.component';
import { ListaRecetasComponent } from './componentes/lista-recetas/lista-recetas.component';
import { DetalleQuesoComponent } from './componentes/detalle-queso/detalle-queso.component';
import { DetalleRecetasComponent } from './componentes/detalle-recetas/detalle-recetas.component';
import { AreaClientesComponent } from './componentes/area-clientes/area-clientes.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { UsuarioregistradoComponent } from './componentes/usuarioregistrado/usuarioregistrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    FormularioAddQuesoComponent,
    FormularioAddRecetasComponent,
    FormularioRegistroComponent,
    LoginComponent,
    ListaQuesosComponent,
    ListaRecetasComponent,
    DetalleQuesoComponent,
    DetalleRecetasComponent,
    AreaClientesComponent,
    FavoritosComponent,
    BuscadorComponent,
    UsuarioregistradoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
