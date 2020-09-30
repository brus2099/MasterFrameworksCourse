<template>
<section id="content">
    <h2 class="subheader">Ultimos articulos</h2>

    <!-- Listado articulos -->
    <div id="articles">
        <article class="article-item" id="article-template">
            <div class="image-wrap">
                <img src="https://miro.medium.com/max/1200/1*ZkPi1gRL7At9uxdU9qTXxg.png" alt="diseño ux">
            </div>
            <h2>Articulo de prueba</h2>
            <span class="date">
                Hace 5 minutos
            </span>
            <a href="article.html">Leer más</a>
            <div class="clearfix"></div>
        </article>
        <!-- Añadir articulos JS -->
    </div>
</section>
</template>

<script>
export default {
    name: 'LastArticle'
}
</script>
