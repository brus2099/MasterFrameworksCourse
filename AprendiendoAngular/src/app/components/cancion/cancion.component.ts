import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Musica } from '../../models/musica'

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  @Input() cancion: Musica;
  @Output() marcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, cancion) {
    this.marcarFavorita.emit({
      cancion: cancion
    })
  }

}
