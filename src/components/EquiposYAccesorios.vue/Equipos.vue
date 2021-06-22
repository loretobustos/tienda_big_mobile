<template>
<div>
    <h1>Listado de minifichas</h1>

 <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Productos"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Id:"
        label-for="nested-street"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-id"></b-form-input>
      </b-form-group>

      <b-form-group
        label="nombre:"
        label-for="nested-nombre"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-nombre"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Caracteristicas:"
        label-cols-sm="3"
        label-align-sm="right"
        class="mb-0"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['camara', 'ram', 'rom', 'gigas', 'chip']"
          :aria-describedby="ariaDescribedby"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>

  <b-form-group
      id=""
      description=""
      label=""
      label-for=""
      valid-feedback="Producto Disponible!"
      :invalid-feedback="invalidFeedback"
      :state="state"
    >
      <b-form-input id="input-1" v-model="id" :equipo="productos" trim></b-form-input>
    </b-form-group>

</div>
</template>

<script>
import EquiposAcesorios from "../EquiposYAccesorios.vue/EquiposAcesorios.vue"
export default {
    name: 'productos',
    props: {
 productos:{
        type: Array,
        required: true
    },
    },
    data: function(){
        return {
            Productos: '',
  "productos": [
    {
      "id": "2334",
      "nombre": "Motorola G10",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 199000,
      "precio_promo": 99000,
      "imagen": "prod_2334.jpg"
    },
    {
      "id": "2335",
      "nombre": "Motorola G20",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 149000,
      "precio_promo": 79000,
      "imagen": "prod_2335.jpg"
    },
    {
      "id": "2336",
      "nombre": "Motorola G30",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 169000,
      "precio_promo": 89000,
      "imagen": "prod_2336.jpg"
    },
    {
      "id": "2337",
      "nombre": "Samsung A10",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 129000,
      "precio_promo": 59000,
      "imagen": "prod_2337.jpg"
    },
    {
      "id": "2338",
      "nombre": "Samsung A20",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 119000,
      "precio_promo": 59000,
      "imagen": "prod_2338.jpg"
    },
    {
      "id": "2339",
      "nombre": "Samsung A30",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 189000,
      "precio_promo": 89000,
      "imagen": "prod_2339.jpg"
    },
    {
      "id": "2340",
      "nombre": "Huawei Y6",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 139000,
      "precio_promo": 79000,
      "imagen": "prod_2340.jpg"
    },
    {
      "id": "2341",
      "nombre": "Huawei Y7",
      "caracteristicas": [
        "Camara 10 MPx",
        "4 GB RAM",
        "32 GB ROM",
        "3G/4G",
        "Chip Dual"
      ],
      "precio_normal": 149000,
      "precio_promo": 69000,
      "imagen": "prod_2341.jpg"
    }
  ],
  "pagedResult": {
    "page": 1,
    "size": 10,
    "total": 12
  }
}

        },

    // computed: {},
    methods: {
        // -- Metodos
    },
    components: {
        EquiposAcesorios
    }
}
</script>

<style scoped>

</style>