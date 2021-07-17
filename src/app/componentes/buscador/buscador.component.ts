import { Component,ViewChild, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  @ViewChild('search') inputName;
  @Output('search') searchEmitter = new EventEmitter<string>()
  @Input() placeholder: string;
  search = new FormControl('')
  constructor() {
   }
  ngOnInit(): void {
    this.search.valueChanges.subscribe((value) =>
      this.searchEmitter.emit(value)
    );
  }

}
