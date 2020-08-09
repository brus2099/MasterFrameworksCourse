import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    template: `
        <h1>Soy un componente</h1>
        <p>Este es mi primer componente!!</p>
    `
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;

    consructor() {
        console.log('Componente mi-componente cargado!!');
    }
}