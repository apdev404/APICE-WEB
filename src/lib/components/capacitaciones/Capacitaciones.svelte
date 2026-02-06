<script lang="ts">
    import Section from "$lib/components/section/Section.svelte";
    import CardCapacitacion from "$lib/components/cards/CardCapacitacion.svelte";
    import ButtonLink from "../buttons/ButtonLink.svelte";  
    import { createEventDispatcher } from "svelte";
    import { Capacitacion } from "$lib/domain/capacitacion";
    import Filters from "../filters/Filters.svelte";
    import {type CapacitacionSearchParams } from "$lib/domain/search/CapaSearchParams";
    import { categoriasOptions } from "$lib/domain/categorias";
    import { Modalidades } from "$lib/domain/auxiliares";

    const dispatch = createEventDispatcher();
    
    const { capacitaciones = [] } = $props<{
        capacitaciones: Capacitacion[];
    }>();


    let capacitacionesFiltradas = $derived(capacitaciones);
    
    let filtros: CapacitacionSearchParams = $state({
        text: '',
        categoriaId: '',
        modalidad: ''
    });

    const opcionesFiltros = {
        categoriaId: categoriasOptions,
        modalidad: [
            { value: '', label: 'Todas las modalidades' },
            { value: Modalidades.Virtual , label: 'Virtual' },
            { value: Modalidades.Presencial , label: 'Presencial' },
            { value: Modalidades.Hibrido , label: 'Hibrido' }
        ]
    };

    function filtrarCapacitaciones() {
      let busquedaConFiltro = 'text='+filtros.text+'&categoriaId='+filtros.categoriaId+'&modalidad='+filtros.modalidad
      dispatch('buscaCapacitaciones', busquedaConFiltro)
    }

    function limpiarFiltros(){
      filtros = {
        text: '',
        categoriaId: '',
        modalidad: ''
      }
      dispatch('buscaCapacitaciones', '')
    }
</script>

<div>

  <Section class="bg-primary text-white py-20 ">
    <div class="max-w-5xl mx-auto text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
        Capacitate con los líderes del mañana
      </h1>
      <p class="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
        Programas de formación dictados por expertos en relaciones internacionales, transformación digital y gestión estratégica.
      </p>
    </div>
  </Section>
  
  <!-- BUSCADOR -->
  <Section class="py-12 bg-whiteBGLite">
    <div class="max-w-4xl mx-auto px-6">
  
      <div class="mb-8">
        <label for="buscador" class="block text-lg font-semibold text-primary mb-4 text-center">
          Encontrá la formación que necesitás
        </label>
  
        <div class="relative max-w-2xl mx-auto">
          <input 
            id="buscador"
            type="text" 
            bind:value={filtros.text}
            oninput={filtrarCapacitaciones}
            placeholder="Buscar por título, categoría o docente..."
            class="w-full px-6 py-4 bg-primary text-whiteColor rounded-xl focus:ring-2 focus:ring-secondary transition-all shadow-sm outline-none placeholder-white/40"
          />
  
          <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
            <i class="ph-thin ph-magnifying-glass text-2xl"></i>
          </div>
        </div>



      <!-- FILTROS-->
    <div class="flex flex-col md:flex-row gap-4 justify-center">

  <Filters 
    filtros={opcionesFiltros.categoriaId}
    titleFilter="Tema"
    on:change={(e) => filtros.categoriaId = e.detail}
  />

  <Filters 
    filtros={opcionesFiltros.modalidad}
    titleFilter="Modalidad"
    on:change={(e) => filtros.modalidad = e.detail}
  />

  <!-- Wrapper para alinear -->
  <div class="flex items-end gap-2 items-center">
    
    <ButtonLink 
      tipo="primary"
      class="h-10 px-3 flex items-center justify-center"
      onClick={filtrarCapacitaciones}
    >
      <i class="ph ph-magnifying-glass"></i>
    </ButtonLink>

    <ButtonLink 
      tipo="inverse"
      class="h-10 px-3 flex items-center justify-center"
      onClick={limpiarFiltros}
    >
      <i class="ph ph-trash"></i>
    </ButtonLink>

  </div>

</div>




      </div>
  
      <!-- CONTADOR -->
      <p class="text-center text-gray-600 mb-10">
        {capacitacionesFiltradas.length}
        {capacitacionesFiltradas.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
        {filtros.text && ` para "${filtros.text}"`}
      </p>
  
      <!-- GRID DE CARDS -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each capacitacionesFiltradas as cap}
          <CardCapacitacion cap={cap} />
        {/each}
      </div>
  
    </div>
    
    <div class="flex flex-col items-center justify-center text-center gap-6 py-16">
      <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-primary max-w-2xl">
        Accedé a las capacitaciones con nuestras membresías
      </h1>

      <p class="text-gray-500 max-w-xl">
        Elegí el plan que mejor se adapta a tu objetivo y empezá hoy mismo a potenciar tu estrategia internacional.
      </p>

      <ButtonLink tipo="primary" href="/membresias" class="mt-2">
        Ver Membresías
      </ButtonLink>
    </div>

  </Section>

</div>
