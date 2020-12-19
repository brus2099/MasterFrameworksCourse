<template>
  <section id="content">
    <h2 class="subheader">{{ titulo }}</h2>
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    {{ nombre }}

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    {{ edad }}

    <p style="color: green; font-weight: bold" v-if="edad >= 65">
      Eres muy grande
    </p>
    <p style="color: blue; font-weight: bold" v-else-if="edad >= 18">
      Eres mayor de edad
    </p>

    <p style="color: red; font-weight: bold" v-else>Eres nemor de edad</p>

    <h2>Directiva iterativa</h2>

    <ol>
      <li v-for="cancion in canciones" :key="cancion">{{cancion}}</li>
    </ol>


  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi componente",
      subtitulo: "soy el sub del componente",
      nombre: "",
      edad: 18,
      canciones: ["Bones", "Creep", "Glory Box"],
    };
  },
};
</script>