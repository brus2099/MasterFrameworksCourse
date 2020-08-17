import { Injectable } from '@angular/core'
import { Musica } from '../models/musica'

@Injectable()

export class CancionService {

    public canciones: Musica[];

    constructor() {
        this.canciones = [
            new Musica("Bones", 2018, "https://images.genius.com/fb1a49198c46034d0d8f313921ccd4d6.1000x1000x1.jpg", "Crumb"),
            new Musica("I'll Keep Coming", 2014, 'https://images.genius.com/db409ae33ed2c8a5589ea16f480d9def.640x640x1.jpg', 'Low Roar'),
            new Musica("Creep", 1999, 'https://www.elquintobeatle.com/wp-content/uploads/2018/02/radiohead-pablo-honey-1.jpg', 'Radiohead')
          ];
    }

    holaMundo(){
        return 'Hola mundo desde el servicio!!'
    }

    getCanciones() {
        return this.canciones;
    }

}