<script lang="ts">
  import Section from "$lib/components/section/Section.svelte";
  import Capacitaciones from "$lib/components/capacitaciones/Capacitaciones.svelte";
  import Consultores from "$lib/components/consultores/Consultores.svelte";
  import { showError } from "$lib/domain/errorHandler.js";
  import { debounce } from "$lib/utils/DebounceSearch.js";
  import type { Capacitacion } from "$lib/domain/capacitacion.js";
  import { capacitacionesService } from "$lib/services/capacitacionesService.js";

  const { data } = $props();
  let capacitacionesLibres: Capacitacion[] = $state(
    data.capacitaciones.filter(c => c.nivel_minimo === 0)
  );

  let capacitacionesMiembros: Capacitacion[] = $state(
    data.capacitaciones.filter(c => c.nivel_minimo > 0)
  ); 


  async function buscarCapacitaciones(text: string, tipo: 'libres' | 'miembros'){
    try{
      const resultado = await capacitacionesService.getCapacitacionesByText(text);

      if(tipo === 'libres'){
        capacitacionesLibres = resultado.filter(c => c.nivel_minimo == 0);
      }

      if(tipo === 'miembros'){
        capacitacionesMiembros = resultado.filter(c => c.nivel_minimo > 0);
      }

    }catch(error){
      showError("Ha ocurrido un error al buscar las capacitaciones: ",error)
    }
  }
  
  const busquedaDebounceCapacitaciones = debounce(
    (text: string, tipo: 'libres' | 'miembros') =>
      buscarCapacitaciones(text, tipo),
    300
  );
</script>

<Capacitaciones
  capacitacionesLibres={capacitacionesLibres}
  capacitacionesMiembros={capacitacionesMiembros}
  on:buscaCapacitaciones={(e) =>
    busquedaDebounceCapacitaciones(e.detail.text, e.detail.tipo)
  }
/>
