import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit, DoCheck {

  public titulo: string;

  constructor() { 
    this.titulo = 'Soy el componente musica'
    console.log('constructor lanzado!!');
  }

  ngOnInit(): void {
    console.log('evento onInit del componente');
  }

  ngDoCheck() {
    console.log('Do check lanzado!!');
  }

  cambiarTitulo() {
    this.titulo = "El titulo se ha cambiado"
  }

  ngOnDestroy(){
    console.log('el componente se va a eliminar de la ejecucion')
  }

}
