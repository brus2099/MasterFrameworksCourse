<template>
  <div class="general">
    <Slider texto="Pagina de pruebas" />

    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <p>Nombre: {{ nombre }}</p>
        <button @click="redirigirABlog()">Redirigir al blog</button>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Pagina",
  components: {
    Slider,
    Sidebar,
  },
  created() {
    console.log("componente creado");
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("componente mounted montado");
  },
  updated() {
    console.log("Componente actualizado");
  },
  destroyed() {
    console.log("componente eliminado: cambiado de ruta");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Bruss",
    };
  },

  methods: {
    actualizarNombre() {
      this.nombre = "Brusssss";
      console.log(this.nombre);
    },
    redirigirABlog() {
      this.$router.push("/blog");
    },
  },
};
</script>