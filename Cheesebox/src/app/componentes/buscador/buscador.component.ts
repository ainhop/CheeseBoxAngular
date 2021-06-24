<<<<<<< HEAD
import {
  Component,
  ViewChild,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
=======
import { Component,ViewChild, EventEmitter, OnInit, Output, Input } from '@angular/core';
>>>>>>> develop
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  @ViewChild('search') inputName;
<<<<<<< HEAD
  search = new FormControl('');
  constructor() {}

=======
  @Output('search') searchEmitter = new EventEmitter<string>()
  @Input() placeholder: string;
  search = new FormControl('')
  constructor() {


   }
>>>>>>> develop
  ngOnInit(): void {
    this.search.valueChanges.subscribe((value) =>
      this.searchEmitter.emit(value)
    );
  }

<<<<<<< HEAD
  @Output('search') searchEmitter = new EventEmitter<string>();
=======
  

>>>>>>> develop
}
