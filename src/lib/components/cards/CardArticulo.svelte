<script>
  let {
    categoria = "",
    fecha = "",
    titulo = "",
    descripcion = "",
    link = "#",
    class: className = ""
  } = $props();
</script>

<div class="bg-whiteColor rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow {className}">
  <div class="p-6">
    <div class="flex justify-between items-start mb-3">
      <span class="bg-greenLight/10 text-greenLight text-xs px-3 py-1 rounded-full">
        {categoria}
      </span>

      <span class="text-primaryFontColor/60 text-sm">
        {fecha}
      </span>
    </div>

    <h3 class="font-heading text-xl font-semibold text-primary mb-3">
      {titulo}
    </h3>

    <p class="text-primaryFontColor mb-4 font-alternative leading-relaxed">
      {descripcion}
    </p>

    <a
      href={link}
      class="text-secondary hover:text-greenAP font-medium text-sm inline-flex items-center"
    >
      Leer análisis
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</div>
