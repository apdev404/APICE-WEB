<script lang="ts">
  import Filters from "../filters/Filters.svelte";
  import type { SelectOption } from "$lib/utils/filters.mapper";

  interface FiltroConfig {
    id: string;
    label: string;
    opciones: SelectOption[];
  }

  interface SearchParams {
    text: string;
    [key: string]: string; 
  }

  let { 
    placeholder = "Buscar...", 
    filtrosConfig = [] as FiltroConfig[], 
    totalResultados = 0,
    variant = "standard", 
    onSearch 
  } = $props<{
    placeholder?: string;
    filtrosConfig: FiltroConfig[];
    totalResultados: number;
    variant?: "standard" | "exclusive";
    onSearch: (params: SearchParams) => void;
  }>();

  let filtrosLocales = $state<SearchParams>({ text: "" });

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

  const tieneFiltrosActivos = $derived(
    filtrosLocales.text !== "" || 
    filtrosConfig.some((f: FiltroConfig) => filtrosLocales[f.id] !== "")
  );

const styles = $derived({
    container: variant === "exclusive" 
      ? "bg-primary border-secondary/20 shadow-2xl shadow-secondary/5" 
      : "bg-whiteColor border-gray-100 shadow-xl",
    
    input: variant === "exclusive"
      ? "bg-white/5 text-white placeholder-white/40 focus:bg-white/10 focus:ring-secondary/30 focus:border-secondary/50 border-white/10"
      : "bg-whiteBGLite/50 text-primary placeholder-gray-400 focus:bg-white focus:ring-secondary/20 border-transparent",
    icon: variant === "exclusive" ? "text-secondary" : "text-gray-400",
    
    textCount: variant === "exclusive" ? "text-white/60" : "text-gray-500",
    
    countNumber: variant === "exclusive" ? "text-secondary font-extrabold" : "text-primary",
    
    divider: variant === "exclusive" ? "bg-secondary/20" : "bg-gray-200",

    btnLimpiar: variant === "exclusive" 
      ? "text-secondary hover:bg-secondary/10" 
      : "text-red hover:bg-red/5"
  });
</script>

<div class="{styles.container} rounded-3xl p-4 md:p-8 border font-sans transition-all duration-300">
  <div class="flex flex-col gap-6">
    <div class="relative group">
      <i class="ph ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 {styles.icon} group-focus-within:text-secondary text-xl transition-colors"></i>
      <input
        type="text"
        bind:value={filtrosLocales.text}
        oninput={ejecutarBusqueda} 
        {placeholder}
        class="w-full pl-14 pr-6 py-5 {styles.input} font-medium rounded-2xl focus:ring-2 outline-none transition-all border"
      />
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t {variant === 'exclusive' ? 'border-white/10' : 'border-gray-100'} pt-6">
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
            class="flex-1 md:flex-none px-6 py-3 text-sm font-bold {variant === 'exclusive' ? 'text-secondary hover:bg-secondary/10' : 'text-red hover:bg-red/5'} rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <i class="ph ph-trash-simple text-lg"></i> 
            Limpiar
          </button>
        {/if}
        
        <div class="hidden md:block h-8 w-[1px] {styles.divider} mx-2"></div>

        <p class="text-sm font-medium {styles.textCount}">
          <span class="{styles.countNumber} font-bold">{totalResultados}</span> resultados
        </p>
      </div>
    </div>
  </div>
</div>