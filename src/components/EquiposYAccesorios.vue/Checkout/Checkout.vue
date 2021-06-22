<template>
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/equiposAccesorios">Equipos Y Accesorios</router-link> |
      <router-link to="/confirmacion">Confirmacion</router-link>
    </div>
    <router-view/>
<b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Datos del Comprador"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Nombre:"
        label-for="nested-nombre"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-nombre"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email:"
        label-for="nested-email"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-email"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Repetir Email:"
        label-for="nested-repetir_email"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-repetir_email"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Telefono:"
        label-for="nested-telefono"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-telefono"></b-form-input>
      </b-form-group>


    </b-form-group>

  </b-card>
<b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Datos del Despacho"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Direccion:"
        label-for="nested-direcion"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-direccion"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Comuna:"
        label-for="nested-comuna"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-comuna"></b-form-input>
      </b-form-group>

    </b-form-group>
  </b-card>
 <b-card>
<b-form-group
        label="Forma de pago:"
        label-cols-sm="Servipag"
        label-align-sm="Webpay"
        class="mb-0"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          class=""
          :options="['Transferencia Bancaria','Servipag', 'Webpay', 'Contra entrega']"
          :aria-describedby="ariaDescribedby"
        ></b-form-radio-group>
      </b-form-group>
 </b-card>
<b-button>Confirmar</b-button>


 <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>

</template>

<script>
import Home from '../../../views/Home.vue'
import EquiposAcesorios from '../../../components/EquiposYAccesorios.vue/EquiposAcesorios.vue'
import Confirmacion from '../../../components/EquiposYAccesorios.vue/Checkout/Confirmacion.vue/Confirmacion.vue'
export default {
    name: 'checkout',
    // props: {},
    data: function(){
        return {
            label:[
'nombre',
'email',
'repetir_email',
'telefono',
'direccion',
'comuna',
            ]
        }
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    components: {
        Home,
        EquiposAcesorios,
        Confirmacion
    }
}
</script>

<style scoped>

</style>