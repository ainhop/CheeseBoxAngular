import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Cheesebox';
  token: boolean = true;

  // private userSubject: BehaviorSubject<any>;
  // public user: Observable<any>;

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
  
  // logout() {

  //   localStorage.removeItem('user');
  //   this.userSubject.next(null);
  //   this.router.navigate(['/account/login']);
  // }
}

