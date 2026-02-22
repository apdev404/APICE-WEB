<script lang="ts">
  import type { Articulo } from "$lib/domain/articulos";

  export let articulo : Articulo
</script>

<div class="bg-whiteColor rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
  <div class="p-6">
    <div class="flex justify-between items-start mb-3">
      <span class="bg-greenLight/10 text-greenLight text-xs px-3 py-1 rounded-full">
        {articulo.categoria}
      </span>

      <span class="text-primaryFontColor/60 text-sm">
        {articulo.fecha_publicacion}
      </span>
    </div>

    <h3 class="font-heading text-xl font-semibold text-primary mb-3">
      {articulo.titulo}
    </h3>

    <p class="text-primaryFontColor mb-4 font-alternative leading-relaxed">
      {articulo.descripcion}
    </p>

    <a
      href={articulo.pdf_url}
      class="text-secondary hover:text-greenAP font-medium text-sm inline-flex items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      Leer análisis
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</div>
