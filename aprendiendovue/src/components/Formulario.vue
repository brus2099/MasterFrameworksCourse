<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellidos" />
          </div>
          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.bio"></textarea>
          </div>
          <div class="form-group radiobuttons">
            <input
              type="radio"
              name="genero"
              value="hombre"
              v-model="user.genero"
            />
            Hombre
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="user.genero"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              value="otro"
              v-model="user.genero"
            />
            Otro
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="datos" v-if="user">
          <h3>{{user.nombre + ' ' + user.apellidos}}</h3>
        </div>

      </section>

      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { required, minLenght } from "vuelidate/lib/validators";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",
  components: {
    Sidebar,
  },
  validations: {
    nombre: {
      required,
      minLenght: minLenght(2)
    },
    apellidos: {
      required,
      minLenght: minLenght(2)
    },
    bio: {
      required,
      minLenght: minLenght(10)
    }
  },
  data() {
    return {
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: "",
      },
    };
  },
  methods: {
    mostrarUsuario() {
      console.log(this.user);
    },
  },
};
</script>