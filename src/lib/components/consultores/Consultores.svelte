<script lang="ts">
  import type { Consultor } from "$lib/domain/consultor";
  import CardConsultor from "$lib/components/cards/CardConsultor.svelte";
  import Section from "$lib/components/section/Section.svelte";
  import SearchBundle from "../searchBundle/SearchBundle.svelte";
  import { categoriasOptions } from "$lib/domain/categorias";

  // Definimos la interfaz para que coincida con lo que SearchBundle emite
  interface SearchParams {
    text: string;
    [key: string]: string;
  }

  let { consultores = [], onSearch } = $props<{
    consultores: Consultor[];
    // Cambiamos el tipo para que acepte el objeto dinámico del Bundle
    onSearch: (params: SearchParams) => void;
  }>();

  let consultoresFiltrados = $derived(consultores);

  // Preparamos la configuración para el Bundle
  const config = [
    { 
      id: 'categoriaId', 
      label: 'Todas las especialidades', 
      opciones: categoriasOptions 
    }
  ];
</script>

<div class="bg-whiteBGLite">
  <section class="text-primaryFontColor py-16 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div class="relative z-10 px-6">
        <span class="text-secondary font-semibold tracking-widest uppercase text-xs font-sans">Red de Expertos</span>
        <h2 class="text-4xl md:text-5xl font-heading font-bold mt-2 text-primary">Nuestros Consultores</h2>
        <p class="text-primaryFontColor/60 mt-4 max-w-xl mx-auto font-sans">
          Conectá con profesionales especializados en estrategia internacional y gestión estratégica.
        </p>
      </div>
  </section>

  <Section class="relative -mt-12 pb-12">
    <div class="max-w-5xl mx-auto px-6">
      <SearchBundle 
        placeholder="Buscar por nombre o especialidad..."
        filtrosConfig={config}
        totalResultados={consultoresFiltrados.length}
        {onSearch}
      />
    </div>
  </Section>

  <Section class="pb-24">
    <div class="max-w-7xl mx-auto px-6">
      {#if consultoresFiltrados.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each consultoresFiltrados as consultor (consultor.id)}
            <div class="hover:-translate-y-2 transition-transform duration-300">
               <CardConsultor {consultor} />
            </div>
          {/each}
        </div>
      {:else}
        <div class="text-center py-20 opacity-50">
          <i class="ph ph-magnifying-glass text-5xl mb-4"></i>
          <p class="text-xl">No se encontraron consultores con esos criterios.</p>
        </div>
      {/if}
    </div>
  </Section>
</div>