<template>
  <section id="content">
    <h1>Este es MiComponente</h1>
    <h2>{{ subtitulo }}</h2>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "soy el subtitulo de mi componente",
    };
  }
};
</script>
