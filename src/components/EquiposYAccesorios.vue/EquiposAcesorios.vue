<template>
<div>
<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/checkout">Checkout</router-link> |
      <router-link to="/confirmacion">Confirmacion</router-link>
    </div>
    <router-view/>
<h1 class="titulo">Equipos y Accesorios</h1>
<router-link to="/equipos">Equipos</router-link>|
<router-link to="/agregarProductos">Agregar Productos</router-link> |
<router-link to="/bolsa">Bolsa</router-link>


  <b-card-group deck>
    <b-card
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Motorola G10"
    >
      <b-card-text>-Camara 10 MGx<br>
-4 RAM<br>
-12 GB ROM<br>
-4G <br>-Chip Dual
      </b-card-text>
      <b-button href="#" variant="primary">Agregar</b-button>
    </b-card>

    <b-card title="Samsung A10" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Header Slot</h6>
      </template>
      <b-card-text>-Camara 10 MGx<br>
-4 RAM<br>
-12 GB ROM<br>
-4G <br>-Chip Dual</b-card-text>
      <b-button href="#" variant="primary">Agregar</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>
  <b-card-group deck>
    <b-card
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Cargador USB"
    >
      <b-card-text>- 5 VOLTS</b-card-text>
      <b-button href="#" variant="primary">Agregar</b-button>
    </b-card>

    <b-card title="Motorola G10" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Header Slot</h6>
      </template>
      <b-card-text>-Camara 10 MGx<br>
-4 RAM<br>
-12 GB ROM<br>
-4G <br>-Chip Dual</b-card-text>
      <b-button href="#" variant="primary">Agregar</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>
  <b-card-group deck>
    <b-card
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Motorola G10"
    >
      <b-card-text>-Camara 10 MGx<br>
-4 RAM<br>
-12 GB ROM<br>
-4G <br>-Chip Dual</b-card-text>
      <b-button href="#" variant="primary">Agregar</b-button>
    </b-card>

    <b-card title="Motorola G10" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Header Slot</h6>
      </template>
      <b-card-text>-Camara 10 MGx<br>
-4 RAM<br>
-12 GB ROM<br>
-4G <br>-Chip Dual</b-card-text>
      <b-button href="#" variant="primary">Agregar</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>
  </div>

</template>

<script>
import Home from '../../views/Home.vue'
import Checkout from '../../components/EquiposYAccesorios.vue/Checkout/Checkout.vue'
import Confirmacion from '../../components/EquiposYAccesorios.vue/Checkout/Confirmacion.vue/Confirmacion.vue'

export default {
    name: 'equiposAccesorios',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    components: {
        Home,
        Checkout,
        Confirmacion,
    },
}
</script>

<style scoped>
.titulo{
    text-align: center;
    font-weight: bold;
}

</style>