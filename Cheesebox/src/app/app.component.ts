import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Cheesebox';
 
  constructor(private router: Router, public usuariosService: UsuariosService ) { }
  
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
  
  onLogout() {

    localStorage.removeItem('token');
    return '';
    }
}

