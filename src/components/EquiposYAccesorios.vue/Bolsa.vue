<template>
    <div>
    <h1>Bolsa de Compras</h1>
<router-link to="/equiposAccesorios">Equipo y Accesorios</router-link>
 <b-form-select
      v-model="items"
      :options="items"
      class="mb-3"
      value-field="id"
      text-field="quantity"
      disabled-field="price"

    ></b-form-select>

    <div class="mt-3">Carrito de compra: <strong>{{ items }}</strong></div>
</div>
</template>

<script>
import EquiposAccesorios from '../EquiposYAccesorios.vue/EquiposAcesorios.vue'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {
            items:'',
"items": [
    {
      "id": 2334,
      "quantity": 1,
      "price": 99000
    },
    {
      "id": 2341,
      "quantity": 1,
      "price": 89000
    }
  ],
  "totales:": {
    "subtotal": 88000,
    "descuentos": 8000,
    "total": 80000
  },
  "cliente:": {
    "nombre": "Juan Perez",
    "email": "juan@yahoo.com",
    "fono": "993244523"
  },
  "despacho:": {
    "direccion": "Las Camelias 1234",
    "comuna": "Santiago Centro"
  },
  "formapago": "webpay"
}
        }
    }
    // computed: {},
    methods: {
        // -- Metodos
opciones:[

]
    }
    components: {
EquiposAccesorios
    }


</script>

<style scoped>

</style>