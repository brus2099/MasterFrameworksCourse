<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="cancion.image" :alt="cancion.title" />
    </div>

    <h2>{{ cancion.title }}</h2>

    <a href="article.html">Leer más</a>

    <input
      type="button"
      value="Marcar como favorita"
      @click="pasarFavoritaAlPadre(cancion)"
    />

    <span
      class="date"
      v-bind:class="{
        yeargreen: cancion.year >= 2015,
        yearred: cancion.year < 2015,
      }"
    >
      {{ cancion.year }}
    </span>

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Cancion",
  props: ["cancion"],
  mounted() {},
  methods: {
    pasarFavoritaAlPadre(cancion) {
      this.$emit("favorita", cancion);
    },
  },
};
</script>