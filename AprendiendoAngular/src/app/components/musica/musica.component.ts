import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Musica } from '../../models/musica'

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit, DoCheck {

  public titulo: string;
  public peliculas: Musica[];

  constructor() { 
    this.titulo = 'Soy el componente musica'
    this.peliculas = [
      new Musica("Spiderman 4", 2020, "https://cnet1.cbsistatic.com/img/IhYCIh0bqjMG8R5K7Lys0opUhyg=/1200x675/2020/06/11/03fe8492-a134-4702-af78-ca2d2ad61f3a/spider-man-miles-morales-01.jpg"),
      new Musica("Endgame", 2019, 'https://cnet1.cbsistatic.com/img/IhYCIh0bqjMG8R5K7Lys0opUhyg=/1200x675/2020/06/11/03fe8492-a134-4702-af78-ca2d2ad61f3a/spider-man-miles-morales-01.jpg'),
      new Musica("Interstellar", 2014, 'https://hipertextual.com/files/2014/11/interstellar1-scaled.jpg')
    ]
  }

  ngOnInit(): void {
    console.log(this.peliculas)
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
