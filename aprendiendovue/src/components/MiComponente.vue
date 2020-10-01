<template>
  <div>
    <hr />
    <h1>A title</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "soy el sub del componente",
    };
  },
};
</script>