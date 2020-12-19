<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Cosas que puedes realizar</h3>
      <a href="#" class="btn btn-success">Crear articulo</a>
    </div>
    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el articulo que buscas</p>
      <form action="">
        <input type="text" name="search" />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>