import { Component,ViewChild, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @ViewChild('search') inputName;
  search = new FormControl('')
  constructor() {


   }
  
  ngOnInit(): void {
    
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))

    console.log(this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value)))

  }

  @Output('search') searchEmitter = new EventEmitter<string>()
  

}
