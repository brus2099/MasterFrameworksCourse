import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Musica } from '../../models/musica'
import { CancionService } from '../../services/cancion.service'

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
  providers: [CancionService]
})
export class MusicaComponent implements OnInit, DoCheck {

  public titulo: string;
  public canciones: Musica[];
  public favorita: Musica;
  public fechaTest: any;

  constructor(
    private _cancionService: CancionService
  ) { 
    this.titulo = 'Soy el componente musica';
    this.canciones = this._cancionService.getCanciones();

    this.fechaTest = new Date(2020, 8, 12);

  }

  ngOnInit(): void {
    console.log(this.canciones)
    console.log('evento onInit del componente');
    console.log(this._cancionService.holaMundo());
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

  mostrarFavorita(event) {
    this.favorita = event.cancion;
  }

}
