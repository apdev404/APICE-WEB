<script lang="ts">
  import Filters from "../filters/Filters.svelte";
  import type { SelectOption } from "$lib/utils/filters.mapper";

  // 1. Definimos interfaces claras
  interface FiltroConfig {
    id: string;
    label: string;
    opciones: SelectOption[];
  }

  interface SearchParams {
    text: string;
    [key: string]: string; 
  }

  // 2. Tipamos las props con exactitud
  let { 
    placeholder = "Buscar...", 
    filtrosConfig = [] as FiltroConfig[], // Forzamos el tipo inicial
    totalResultados = 0,
    onSearch 
  } = $props<{
    placeholder?: string;
    filtrosConfig: FiltroConfig[];
    totalResultados: number;
    onSearch: (params: SearchParams) => void;
  }>();

  let filtrosLocales = $state<SearchParams>({
    text: ""
  });

  $effect(() => {
    filtrosConfig.forEach((f: FiltroConfig) => {
      if (!(f.id in filtrosLocales)) {
        filtrosLocales[f.id] = "";
      }
    });
  });

  function ejecutarBusqueda(): void {
    onSearch({ ...filtrosLocales });
  }

  function limpiarFiltros(): void {
    filtrosLocales.text = "";
    filtrosConfig.forEach((f: FiltroConfig) => {
      filtrosLocales[f.id] = "";
    });
    ejecutarBusqueda();
  }

  // Helper para verificar si hay filtros activos (evita errores de any en el template)
  const tieneFiltrosActivos = $derived(
    filtrosLocales.text !== "" || 
    filtrosConfig.some((f: FiltroConfig) => filtrosLocales[f.id] !== "")
  );
</script>

<div class="bg-whiteColor rounded-3xl shadow-xl p-4 md:p-8 border border-gray-100 font-sans">
  <div class="flex flex-col gap-6">
    <div class="relative group">
      <i class="ph ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary text-xl transition-colors"></i>
      <input
        type="text"
        bind:value={filtrosLocales.text}
        oninput={ejecutarBusqueda} 
        {placeholder}
        class="w-full pl-14 pr-6 py-5 bg-whiteBGLite/50 text-primary font-medium rounded-2xl focus:ring-2 focus:ring-secondary/20 focus:bg-white border-transparent focus:border-secondary/30 outline-none transition-all placeholder-gray-400"
      />
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6">
      <div class="w-full md:w-auto flex flex-wrap items-center gap-3">
        {#each filtrosConfig as f (f.id)}
          <Filters
            filtros={f.opciones}
            titleFilter={f.label}
            onchange={(val: string) => { 
              filtrosLocales[f.id] = val; 
              ejecutarBusqueda(); 
            }}
          />
        {/each}
      </div>

      <div class="flex items-center gap-3 w-full md:w-auto">
        {#if tieneFiltrosActivos}
          <button 
            onclick={limpiarFiltros} 
            class="flex-1 md:flex-none px-6 py-3 text-sm font-bold text-red hover:bg-red/5 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <i class="ph ph-trash-simple text-lg"></i> 
            Limpiar
          </button>
        {/if}
        
        <div class="hidden md:block h-8 w-[1px] bg-gray-200 mx-2"></div>

        <p class="text-sm font-medium text-gray-500">
          <span class="text-primary font-bold">{totalResultados}</span> resultados
        </p>
      </div>
    </div>
  </div>
</div>