import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarCanciones: boolean;

    constructor() {
        this.titulo = 'Hola mundo, soy el titulo';
        this.comentario = "Soy el comentario de mi-componente";
        this.year = 2099;

        this.mostrarCanciones = true;

        console.log('Componente mi-componente cargado!!');
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarCanciones() {
        this.mostrarCanciones = false;
    }
}
