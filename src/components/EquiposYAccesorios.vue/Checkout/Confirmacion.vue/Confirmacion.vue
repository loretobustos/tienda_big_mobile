<template>
<div>
    <h1>Confirmacion</h1>
<b-alert show variant="wite" >
    <h4 class="alert-heading">Orden Lista</h4>
    <p>
La Orden n°123456 ha sido confirmada y ya la estamospreparando!
    </p>


  </b-alert>

 <b-button href="/home">ir al home</b-button>
</div>
</template>

<script>
import Checkout from '../../Checkout/Checkout.vue'
import EquiposAcesorios from '../../../../components/EquiposYAccesorios.vue/EquiposAcesorios.vue'
import Home from '../../../../views/Home.vue'
export default {
    name: 'confirmacion',
    // props: {},
    data: function(){
        return {
confirmacion:[
{
  "orderNumber": 4452239,
  "status": "CONFIRMADO"
}
]

        }
    },
    // computed: {},
    methods: {

    },
    components: {
        Home,
        EquiposAcesorios,
        Checkout,
    },
}
</script>

<style scoped>

</style>