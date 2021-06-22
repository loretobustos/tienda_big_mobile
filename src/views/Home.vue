<template>
<div class="img">
  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
  <br>
<h1 class="planes">Planes Flexible</h1>


  <b-card-group deck>
    <b-card title="Paga lo que hablas" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        En BigMobile solo pagas lo quehablas
        Nadade perder minutos ni cobros de mas.
      </b-card-text>
    </b-card>

    <b-card title="Cambiate cuando quieras" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
          EnBigMobile no te amarramos
          Puedescambiarde plancuando quieras
        </b-card-text>
    </b-card>

    <b-card title="Minutos adicionales" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
          Si quedaste corto de minutos este mes puedes agregarminutos adicionales al mismo precioque tu plan
      </b-card-text>
    </b-card>
  </b-card-group>

<h1 class="planes">Qué dicen de nosotros</h1>


  <b-card-group deck>
    <b-card  img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       "Sonbacanes!!! Esta compañia te apaña caleta"
      </b-card-text>
      <template #footer>
        <small class="text-muted">José Pedreros</small>
      </template>
    </b-card>

    <b-card  img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
          "Aca si tecontestan el telefono cuando los llamas"
        </b-card-text>
  <template #footer>
        <small class="text-muted">Miguel Cáceres</small>
      </template>
    </b-card>

    <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        "Lo mejor de la señal"
      </b-card-text>
  <template #footer>
        <small class="text-muted">Soledad Gómez</small>
      </template>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
// @ is an alias to /src
import OficinaVirtual from '../components/OficinaVirtual.vue'
import Planes from '../components/Planes.vue'
import Prepago from '../components/Prepago.vue'
import EquiposAcesorios from '../components/EquiposYAccesorios.vue/EquiposAcesorios.vue'

export default {
  name: 'Home',
  components: {
       OficinaVirtual,
       Planes,
       Prepago,
       EquiposAcesorios,
  }
}
</script>

<style>
.planes{
   text-align: center;
  front-weight: bold;

}
</style>
