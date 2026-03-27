<script lang="ts">
  import { showError } from "$lib/domain/errorHandler.js";
  import { debounce } from "$lib/utils/DebounceSearch.js";
  import type { Capacitacion } from "$lib/domain/capacitacion.js";
  import { capacitacionesService } from "$lib/services/capacitacionesService.js";
  import type { Modalidades } from "$lib/domain/auxiliares";
  import Capacitaciones from "$lib/components/capacitaciones/Capacitaciones.svelte";
  import CapacitacionesMiembros from "$lib/components/capacitacionesMiembros/CapacitacionesMiembros.svelte";

  interface CapaSearchParams {
    text: string;
    onlyFree: boolean;
    categoriaId: string;
    modalidad: string | Modalidades;
  }

  const { data } = $props();
  
  let capacitacionesLibres = $state<Capacitacion[]>(
    data.capacitacionesLibres
  );

  let capacitacionesMiembros = $state<Capacitacion[]>(
    data.capacitacionesMiembros
  ); 

  async function buscarCapacitaciones(filtros: CapaSearchParams) {
    try {
      const resultado = await capacitacionesService.getCapacitacionesByText({
        text: filtros.text,
        categoriaId: filtros.categoriaId,
        modalidad: filtros.modalidad as Modalidades,
        soloLibres: filtros.onlyFree 
      });

      if (filtros.onlyFree) {
        capacitacionesLibres = resultado;
      } else {
        capacitacionesMiembros = resultado;
      }

    } catch (error) {
      showError("Error al buscar:", error);
    }
  }

  const busquedaDebounce = debounce(
    (payload: CapaSearchParams) => buscarCapacitaciones(payload), 
    300
  );
</script>

<Capacitaciones
  capacitaciones={capacitacionesLibres}
  onBusca={(f: CapaSearchParams) => busquedaDebounce(f)} 
/>


<CapacitacionesMiembros
  capacitaciones={capacitacionesMiembros}
  onBusca={(f: CapaSearchParams) => busquedaDebounce(f)}
/>