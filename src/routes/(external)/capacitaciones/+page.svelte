<script lang="ts">
  import Section from "$lib/components/section/Section.svelte";
  import Capacitaciones from "$lib/components/capacitaciones/Capacitaciones.svelte";
  import Consultores from "$lib/components/consultores/Consultores.svelte";
  import { showError } from "$lib/domain/errorHandler.js";
  import { debounce } from "$lib/utils/DebounceSearch.js";
  import type { Capacitacion } from "$lib/domain/capacitacion.js";
  import { capacitacionesService } from "$lib/services/capacitacionesService.js";

  const { data } = $props();
  let capacitaciones: Capacitacion[] = $state(data.capacitaciones);
 
  async function buscarCapacitaciones(text: string){
    try{
      capacitaciones = await capacitacionesService.getCapacitacionesByText(text)
      console.log(capacitaciones)
    }catch(error){
      showError("Ha ocurrido un error al buscar las capacitaciones: ",error)
    }
  }

  const busquedaDebounceCapacitaciones = debounce(buscarCapacitaciones, 300)

</script>


<Capacitaciones capacitaciones= {capacitaciones}
  on:buscaCapacitaciones={(e)  => busquedaDebounceCapacitaciones(e.detail)}
/>

