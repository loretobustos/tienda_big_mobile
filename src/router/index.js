import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error from '../views/Error.vue'
import Planes from '../components/Planes.vue'
import Prepago from '../components/Prepago.vue'
import OficinaVirtual from '../components/OficinaVirtual.vue'
import EquiposAccesorios from '../components/EquiposYAccesorios.vue/EquiposAcesorios.vue'
import Checkout from '../components/EquiposYAccesorios.vue/Checkout/Checkout.vue'
import Confirmacion from '../components/EquiposYAccesorios.vue/Checkout/Confirmacion.vue/Confirmacion.vue'
import Equipos from '../components/EquiposYAccesorios.vue/Equipos.vue'
import AgregarProductos from '../components/EquiposYAccesorios.vue/AgregarProductos.vue'
import Bolsa from '../components/EquiposYAccesorios.vue/Bolsa.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/bolsa',
        component: Bolsa,
        name: 'Bolsa',
    },
    {
        path: '/agregarProductos',
        component: AgregarProductos,
        name: 'AgregarProductos',
    },
    {
        path: '/confirmacion',
        component: Confirmacion,
        name: 'Confirmacion',
    },
    {
        path: '/equipos',
        component: Equipos,
        name: 'Equipos',
    },
    {
        path: '/checkout',
        component: Checkout,
        name: 'Checkout',
    },
    {
        path: '/equiposAccesorios',
        component: EquiposAccesorios,
        name: 'EquiposAccesorios',
    },
    {
        path: '/oficinavirtual',
        component: OficinaVirtual,
        name: 'OficinaVirtual',
    },
    {
        path: '/prepago',
        component: Prepago,
        name: 'Prepago',
    },
    {
        path: '/planes',
        component: Planes,
        name: 'Planes',
    },
    {
        path: '/error',
        name: 'Error',
        component: () =>
            import ('../views/Error.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router