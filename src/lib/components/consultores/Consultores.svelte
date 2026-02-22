<script lang="ts">
  import type { Consultor } from "$lib/domain/consultor";
  import CardConsultor from "$lib/components/cards/CardConsultor.svelte";
  import Section from "$lib/components/section/Section.svelte";
  import Filters from "../filters/Filters.svelte";
  import ButtonLink from "../buttons/ButtonLink.svelte";
  import { createEventDispatcher } from "svelte";

  // Ajustá esto según tu dominio real
  import { categoriasOptions } from "$lib/domain/categorias";

  const dispatch = createEventDispatcher();

  const { consultores = [] } = $props<{
    consultores: Consultor[];
  }>();

  let consultoresFiltrados = $derived(consultores);

  // ===== FILTROS =====
  let filtros = $state({
    text: "",
    categoriaId: ""
  });

  const opcionesFiltros = {
    categoriaId: categoriasOptions
  };

  function filtrarConsultores() {
    const query =
      "text=" + filtros.text +
      "&categoriaId=" + filtros.categoriaId;

    dispatch("buscaConsultores", query);
  }

  function limpiarFiltros() {
    filtros = {
      text: "",
      categoriaId: ""
    };

    dispatch("buscaConsultores", "");
  }
</script>

<div>

  <!-- HERO -->
  <section class="bg-primary text-whiteColor py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6">
        Nuestros Consultores
      </h1>
      <p class="text-xl text-whiteColor/80 max-w-3xl mx-auto leading-relaxed">
        Expertos altamente calificados listos para ayudarte en tu proyecto
      </p>
    </div>
  </section>

  <!-- BUSCADOR + FILTROS -->
  <Section class="py-10 lg:py-20 bg-whiteBGLite">
    <div class="max-w-4xl mx-auto px-6">

      <!-- BUSCADOR -->
      <div class="mb-8">
        <label for="buscador" class="block text-lg font-semibold text-primary mb-4 text-center">
          Encontrá al consultor ideal
        </label>

        <div class="relative max-w-2xl mx-auto">
          <input
            id="buscador"
            type="text"
            bind:value={filtros.text}
            oninput={filtrarConsultores}
            placeholder="Buscar por nombre, especialidad..."
            class="w-full px-6 py-4 bg-primary text-whiteColor rounded-xl focus:ring-2 focus:ring-secondary transition-all shadow-sm outline-none placeholder-white/40"
          />

          <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
            <i class="ph-thin ph-magnifying-glass text-2xl"></i>
          </div>
        </div>
      </div>

      <!-- FILTROS -->
      <div class="flex flex-col md:flex-row gap-4 justify-center">

        <Filters
          filtros={opcionesFiltros.categoriaId}
          titleFilter="Especialidad"
          on:change={(e) => filtros.categoriaId = e.detail}
        />

        <div class="flex items-end gap-2 items-center">

          <ButtonLink
            tipo="primary"
            class="h-10 px-3 flex items-center justify-center"
            onClick={filtrarConsultores}
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

      <!-- CONTADOR -->
      <div class="text-center mt-8">
        <p class="text-gray-600">
          {consultoresFiltrados.length}
          {consultoresFiltrados.length === 1
            ? " consultor encontrado"
            : " consultores encontrados"}
          {filtros.text && ` para "${filtros.text}"`}
        </p>
      </div>

    </div>
  </Section>

  <!-- GRID -->
  <Section class="pb-16 lg:pb-20 bg-whiteBGLite">
    <div class="max-w-7xl mx-auto px-6">

      {#if consultoresFiltrados.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each consultoresFiltrados as consultor}
            <CardConsultor consultor={consultor} />
          {/each}
        </div>
      {:else}
        <!-- EMPTY STATE -->
        <div class="text-center py-16">
          <i class="ph-thin ph-users-three text-6xl text-gray-300 mb-4"></i>
          <h3 class="text-2xl font-heading font-semibold text-gray-600 mb-2">
            No se encontraron consultores
          </h3>
          <p class="text-gray-500 max-w-md mx-auto">
            {filtros.text
              ? `No hay resultados para "${filtros.text}". Probá con otros filtros.`
              : "Pronto agregaremos más consultores a nuestra red."}
          </p>

          {#if filtros.text || filtros.categoriaId}
            <button
              onclick={limpiarFiltros}
              class="mt-4 text-secondary hover:text-orange-600 font-semibold transition-colors"
            >
              Ver todos los consultores
            </button>
          {/if}

        </div>
      {/if}

    </div>
  </Section>

  <!-- CTA -->
  <section class="bg-primary text-whiteColor py-16">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-heading font-bold mb-4">
        ¿No encontrás lo que buscás?
      </h2>
      <p class="text-xl text-whiteColor/80 mb-8 max-w-2xl mx-auto">
        Contanos sobre tu proyecto y te ayudamos a encontrar el consultor perfecto.
      </p>
      <a
        href="/contacto"
        class="inline-block bg-secondary hover:bg-orange-600 text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
      >
        Contactanos
      </a>
    </div>
  </section>

</div>
