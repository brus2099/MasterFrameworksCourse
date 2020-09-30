<template>
  <section id="content">
    <h2 class="subheader">Ultimos articulos</h2>
    <h1>{{ msg }}</h1>
    <h2>{{texto}}</h2>
    <p>{{info}}</p>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return { 
      texto: 'hola mundo desde el metodo data',
      info: 'en el return de data se devuelve un objeto'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
