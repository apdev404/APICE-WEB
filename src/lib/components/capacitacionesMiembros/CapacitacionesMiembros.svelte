<script lang="ts">
  import Section from "$lib/components/section/Section.svelte";
  import CardCapacitacion from "$lib/components/cards/CardCapacitacion.svelte";
  import SearchBundle from "../searchBundle/SearchBundle.svelte";
  import ButtonLink from "../buttons/ButtonLink.svelte";
  import type { Capacitacion } from "$lib/domain/capacitacion";
  import { categoriasOptions } from "$lib/domain/categorias";
  import { Modalidades } from "$lib/domain/auxiliares";

  interface CapaSearchParams {
    text: string;
    categoriaId: string;
    modalidad: string;
    onlyFree: boolean; 
  }

  interface BundleParams {
    text: string;
    [key: string]: string;
  }

  let { capacitaciones = [], onBusca } = $props<{ 
    capacitaciones: Capacitacion[],
    onBusca: (filtros: CapaSearchParams) => void 
  }>();

  const configFiltros = [
    { id: 'categoriaId', label: 'Tema', opciones: categoriasOptions },
    { 
      id: 'modalidad', 
      label: 'Modalidad', 
      opciones: [
        { value: Modalidades.Virtual , label: 'Virtual' },
        { value: Modalidades.Presencial , label: 'Presencial' },
        { value: Modalidades.Hibrido , label: 'Híbrido' }
      ]
    }
  ];

  function handleSearch(params: BundleParams): void {
    onBusca({ 
      text: params.text || "",
      categoriaId: params.categoriaId || "",
      modalidad: params.modalidad || "",
      onlyFree: false 
    });
  }
</script>

<div class="py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
  <div class="max-w-3xl mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-extrabold">🔒 Contenido exclusivo para miembros</h2>
    <p class="mt-5 text-white/80 text-lg font-sans">Accedé a programas avanzados según tu nivel de membresía.</p>
    <ButtonLink tipo="inverse" href="/membresias" class="mt-8">Ver Membresías</ButtonLink>
  </div>
</div>

<Section class="py-16 bg-whiteBGLite">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-primary font-heading">Capacitaciones para Miembros</h2>
      <div class="h-1.5 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="mb-16">
      <SearchBundle 
        placeholder="Buscar capacitaciones avanzadas..."
        filtrosConfig={configFiltros}
        totalResultados={capacitaciones.length}
        onSearch={handleSearch}
        variant="exclusive"
      />
    </div>

    {#if capacitaciones.length > 0}
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {#each capacitaciones as cap (cap.id)}
          <div class="hover:-translate-y-2 transition-transform duration-300">
            <CardCapacitacion {cap} />
          </div>
        {/each}
      </div>
    {:else}
      <div class="flex flex-col items-center justify-center py-20 bg-whiteColor/30 rounded-3xl border-2 border-dashed border-gray-200">
        <i class="ph ph-lock-key text-4xl text-gray-300 mb-4"></i>
        <p class="text-gray-500 font-medium font-sans">No se encontraron capacitaciones exclusivas.</p>
      </div>
    {/if}
  </div>
</Section>