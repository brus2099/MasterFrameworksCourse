<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Canciones</h2>

        <div class="favorita" v-if="favorita">
          La cancion marcada es:
          <h2>{{ favorita.title }}</h2>
        </div>

        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          <br>
          {{nombre | mayusculas | concatenaAnio('Me quiero morir')}}
        </div>

        <div id="articles">
          <div v-for="cancion in cancionesMayuscula" v-bind:key="cancion.title">
            <Cancion
              :cancion="cancion"
              @favorita="haLlegadoLaCancionFavorita"
            />
          </div>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Cancion from "./Cancion.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Canciones",
  filters: {
    mayusculas(valor) {
      return valor.toUpperCase();
    },
    concatenaAnio(valor, mensaje) {
      let date = new Date();
      return valor + ' ' + date.getFullYear() + ' ' + mensaje;
    }
  },
  components: {
    Cancion,
    Sidebar,
  },
  methods: {
    haLlegadoLaCancionFavorita(favorita) {
      this.favorita = favorita;
      console.log(this.favorita);
    },
  },
  computed: {
    cancionesMayuscula() {
      let cancionesMod = this.canciones;

      for (var i = 0; i < this.canciones.length; i++) {
        cancionesMod[i].title = cancionesMod[i].title.toUpperCase();
      }

      return cancionesMod;
    },
    misDatos() {
      return this.nombre + '<br/>' + 'Proyectos: ' + this.github
    }
  },
  data() {
    return {

      nombre: 'Bruno Cruz',
      github: '@brus2099',

      favorita: null,
      canciones: [
        {
          title: "Bones",
          year: 2017,
          image:
            "https://images.genius.com/fb1a49198c46034d0d8f313921ccd4d6.1000x1000x1.jpg",
        },
        {
          title: "No Suprises",
          year: 1996,
          image: "https://img.youtube.com/vi/u5CVsCnxyXg/hqdefault.jpg",
        },
        {
          title: "Glory Box",
          year: 1995,
          image:
            "https://img.discogs.com/UEu2OUB6zthgfYpEnsak077l-WQ=/fit-in/500x498/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-178356-1453320229-6034.jpeg.jpg",
        },
        {
          title: "I´ll Keep Coming",
          year: 2016,
          image: "https://m.media-amazon.com/images/I/714N0biuhyL._SS500_.jpg",
        },
      ],
    };
  },
};
</script>