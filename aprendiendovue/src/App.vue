<template>
<div>
    <Header />
    <Slider />
    <div class="center">
        <LastArticles />
        <router-view />
        <Sidebar />
        <div class="clearfix"></div>
    </div>
    <Footer />
</div>
</template>

<script>
/*
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue' */
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import Sidebar from './components/Sidebar.vue'
import LastArticles from './components/LastArticles.vue'
import Footer from './components/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Slider,
        Sidebar,
        LastArticles,
        Footer
    }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

@import './assets/css/styles.css';
</style>
