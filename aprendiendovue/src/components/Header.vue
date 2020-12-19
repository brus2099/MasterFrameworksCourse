<template>
    <header id="header">
        <div class="center">
            <!-- Logo -->
            <div id="logo">
                <img src="../assets/logo.png" alt="Logotipo" class="app-logo">
                <span id="brand">
                    <strong>Curso</strong>Vue
                </span>
            </div>

            <!-- Menu -->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/home" active-class="active">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/blog" active-class="active">Blog</router-link>
                    </li>
                    <li>
                        <router-link to="/formulario" active-class="active">Formulario</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'pagina', params:{id: 'Soy el valor del parametro'}}" active-class="active">Pruebas 1</router-link>
                    </li>
                    <li>
                        <router-link to="/canciones" active-class="active">Pruebas C</router-link>
                    </li>
                </ul>
            </nav>

            <!-- Limpiar flotados -->
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>