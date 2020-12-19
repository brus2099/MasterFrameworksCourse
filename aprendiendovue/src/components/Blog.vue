<template>
  <div class="general">
    <Slider texto="Blog" />

    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
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
  name: "Blog",
  components: {
    Slider,
    Sidebar,
  },
};
</script>