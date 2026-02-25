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
    
    const {
      capacitacionesLibres = [],
      capacitacionesMiembros = []
    } = $props<{
      capacitacionesLibres: Capacitacion[];
      capacitacionesMiembros: Capacitacion[];
    }>();

    

    let capacitacionesFiltradas = $derived(capacitacionesLibres);
    let capacitacionesFiltradasMiembros = $derived(capacitacionesMiembros);
    
    let filtrosLibres: CapacitacionSearchParams = $state({
      text: '',
      categoriaId: '',
      modalidad: ''
    });

    let filtrosMiembros: CapacitacionSearchParams = $state({
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

    function filtrarLibres() {
      dispatch('buscaCapacitaciones', {
        text: filtrosLibres.text,
        tipo: 'libres'
      });
    }

    function filtrarMiembros() {
      dispatch('buscaCapacitaciones', {
        text: filtrosMiembros.text,
        tipo: 'miembros'
      });
    }

    function limpiarLibres() {
      filtrosLibres = {
        text: '',
        categoriaId: '',
        modalidad: ''
      };

      dispatch('buscaCapacitaciones', {
        text: '',
        tipo: 'libres'
      });
    }

    function limpiarMiembros() {
      filtrosMiembros = {
        text: '',
        categoriaId: '',
        modalidad: ''
      };

      dispatch('buscaCapacitaciones', {
        text: '',
        tipo: 'miembros'
      });
    }
</script>

<div>

  <!-- HERO -->
  <Section class="bg-primary text-white py-20">
    <div class="max-w-5xl mx-auto text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
        Capacitate con los líderes del mañana
      </h1>
      <p class="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
        Programas de formación dictados por expertos en relaciones internacionales,
        transformación digital y gestión estratégica.
      </p>
    </div>
  </Section>

  <!-- ========================= -->
  <!-- CAPACITACIONES ABIERTAS -->
  <!-- ========================= -->

  <Section class="py-14 bg-whiteBGLite">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Buscador -->
      <div class="mb-10">
        <label class="block text-lg font-semibold text-primary mb-4 text-center">
          Encontrá la formación que necesitás
        </label>

        <div class="relative max-w-2xl mx-auto">
          <input 
            type="text"
            bind:value={filtrosLibres.text}
            oninput={filtrarLibres}
            placeholder="Buscar por título, categoría o docente..."
            class="w-full px-6 py-4 bg-primary text-white rounded-xl focus:ring-2 focus:ring-secondary transition-all shadow-md outline-none placeholder-white/40"
          />
          <div class="absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
            <i class="ph-thin ph-magnifying-glass text-2xl"></i>
          </div>
        </div>
      </div>


           <!-- FILTROS-->
    <div class="flex flex-col md:flex-row gap-4 justify-center">

  <Filters 
    filtros={opcionesFiltros.categoriaId}
    titleFilter="Tema"
    on:change={(e) => filtrosLibres.categoriaId = e.detail}
  />

  <Filters 
    filtros={opcionesFiltros.modalidad}
    titleFilter="Modalidad"
    on:change={(e) => filtrosLibres.modalidad = e.detail}
  />

  <!-- Wrapper para alinear -->
  <div class="flex items-end gap-2 items-center">
    
    <ButtonLink 
      tipo="primary"
      class="h-10 px-3 flex items-center justify-center"
      onClick={filtrarLibres}
    >
      <i class="ph ph-magnifying-glass"></i>
    </ButtonLink>

    <ButtonLink 
      tipo="inverse"
      class="h-10 px-3 flex items-center justify-center"
      onClick={limpiarLibres}
    >
      <i class="ph ph-trash"></i>
    </ButtonLink>

  </div>

</div>
      <!-- Contador -->
      <p class="text-center text-gray-600 mb-10">
        {capacitacionesFiltradas.length}
        {capacitacionesFiltradas.length === 1 ? ' resultado encontrado' : ' resultados encontrados'}
        {filtrosLibres.text && ` para "${filtrosLibres.text}"`}
      </p>

      <!-- Grid más ancho -->
      <div class="grid gap-10 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {#each capacitacionesFiltradas as cap }
          <div class="max-w-md mx-auto w-full">
            <CardCapacitacion cap={cap} />
          </div>
        {/each}
      </div>

    </div>
  </Section>


  <!-- ========================= -->
  <!-- BLOQUE SEPARADOR PREMIUM -->
  <!-- ========================= -->

  <div class="py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-extrabold">
        🔒 Contenido exclusivo para miembros
      </h2>
      <p class="mt-5 text-white/80 text-lg">
        Accedé a programas avanzados según tu nivel de membresía.
      </p>
      <ButtonLink tipo="inverse" href="/membresias" class="mt-8">
        Ver Membresías
      </ButtonLink>
    </div>
  </div>


  <!-- ========================= -->
  <!-- CAPACITACIONES MIEMBROS -->
  <!-- ========================= -->

  <Section class="py-16 bg-whiteBGLite">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-primary">
          Capacitaciones para miembros
        </h2>
      </div>

      <!-- Buscador -->
      <div class="mb-10">
        <label class="block text-lg font-semibold text-primary mb-4 text-center">
          Buscar capacitaciones exclusivas
        </label>

        <div class="relative max-w-2xl mx-auto">
          <input 
            type="text"
            bind:value={filtrosMiembros.text}
            oninput={filtrarMiembros}
            placeholder="Buscar por título, categoría o docente..."
            class="w-full px-6 py-4 bg-secondary text-white rounded-xl focus:ring-2 focus:ring-primary transition-all shadow-md outline-none placeholder-white/50"
          />
          <div class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70">
            <i class="ph-thin ph-magnifying-glass text-2xl"></i>
          </div>
        </div>
      </div>

      <!-- Contador -->
      <p class="text-center text-gray-600 mb-10">
        {capacitacionesFiltradasMiembros.length}
        {capacitacionesFiltradasMiembros.length === 1 ? ' resultado encontrado' : ' resultados encontrados'}
        {filtrosMiembros.text && ` para "${filtrosMiembros.text}"`}
      </p>

      <!-- Grid más ancho -->
      <div class="grid gap-10 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {#each capacitacionesFiltradasMiembros as cap}
          <div class="max-w-md mx-auto w-full">
            <CardCapacitacion cap={cap} />
          </div>
        {/each}
      </div>

    </div>
  </Section>

</div>