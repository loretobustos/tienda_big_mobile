<template>
<div>
    <h1>Agregar Productos</h1>
<b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Agregar <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
<b-button variant="agregar">Agregar</b-button>
</div>
</template>

<script>
import EquiposAccesorios from '../EquiposYAccesorios.vue/EquiposAcesorios.vue'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {
types: [
          'imagen',
          'marca',
          'modelo',
          'ram',
          'rom',
          'gigas',
          'info',
          'precio antes',
          'precio ahora',
        ]
        }
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    components: {
      EquiposAccesorios
    },
}
</script>

<style scoped>

</style>