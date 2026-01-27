<script lang="ts">
  import Section from "$lib/components/section/Section.svelte";
  import CardArticulo from "$lib/components/cards/CardArticulo.svelte";  
  import { debounce } from "$lib/utils/DebounceSearch";
  import { articulosService } from "$lib/services/articulosService.js";
  import type { Articulo } from "$lib/domain/articulos.js";
  import { showError } from "$lib/domain/errorHandler";

  let {data} = $props()
let articulos = $state<Articulo[]>(data.articulos);
let articulosFiltrados = $derived<Articulo[]>( articulos);

  let terminoBusqueda = '';


  async function buscarArticulos(text: string){
    try{
      articulos = await articulosService.getArticulosByText(text)

    }catch(error){
      showError("Ha ocurrido un error al buscar los consultores: ",error)
    }
  }

  const busquedaDebounceConsultores = debounce(buscarArticulos, 300)
</script>

<!-- El resto del código igual -->
<!-- Hero Section -->
<section class="bg-primary text-whiteColor py-20">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6">
      ARTICULOS
    </h1>
    <p class="text-xl text-whiteColor/80 max-w-3xl mx-auto leading-relaxed">
      Enterate de las ultimas noticias diplomaticas alrededor del mundo
    </p>
  </div>
</section>

<!-- Buscador y Filtros -->
<Section class="py-10 lg:py-20 bg-whiteBGLite">
  <div class="max-w-4xl mx-auto px-6">
    <!-- Buscador -->
    <div class="mb-8">
      <label for="buscador" class="block text-lg font-semibold text-primary mb-4 text-center">
        Busca lo que te interese conocer
      </label>
       <div class="relative max-w-2xl mx-auto">
        <input 
          id="buscador"
          type="text" 
          bind:value={terminoBusqueda}
          oninput={() => busquedaDebounceConsultores(terminoBusqueda)}
          placeholder="Buscar por título, categoría o autor..."
          class="w-full px-6 py-4 bg-primary text-whiteColor rounded-xl focus:ring-2 focus:ring-secondary transition-all shadow-sm outline-none placeholder-white/40"
        />
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
          <i class="ph-thin ph-magnifying-glass text-2xl"></i>
        </div>
      </div>
    </div>

    <!-- Contador de resultados -->
    <div class="text-center mb-8">
      <p class="text-gray-600">
        {articulosFiltrados.length} {articulosFiltrados.length === 1 ? 'articulo encontrado' : 'articulos encontrados'}
        {terminoBusqueda && ` para "${terminoBusqueda}"`}
      </p>
    </div>
  </div>
</Section>


<!-- Grid de Consultores -->
<Section class={"pb-16 lg:pb-20 bg-whiteBGLite"}>
  <div class="max-w-7xl mx-auto px-6">
    {#if articulosFiltrados.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each articulosFiltrados as publicacion}
          <CardArticulo
            articulo = {publicacion}
            />
        {/each}
      </div>
    {:else}
      <!-- Estado vacío -->
      <div class="text-center py-16">
        <i class="ph-thin ph-users-three text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-2xl font-heading font-semibold text-gray-600 mb-2">
          No se encontraron articulos
        </h3>
        <p class="text-gray-500 max-w-md mx-auto">
          {terminoBusqueda ? 
            `No hay resultados para "${terminoBusqueda}". Intenta con otros términos.` : 
            'Pronto agregaremos más articulos a nuestra red.'
          }
        </p>
        {#if terminoBusqueda}
          <button 
            onclick={() => terminoBusqueda = ''}
            class="mt-4 text-secondary hover:text-orange-600 font-semibold transition-colors"
          >
            Ver todos los articulos
          </button>
        {/if}
      </div>
    {/if}
  </div>
</Section>
