<script lang="ts">
  let { 
    titulo = "Titulo",
    descripcion = "Descripcion",
    duracion = "Duracion",
    modalidad = "Modalidad",
    nivel = "Nivel",
    imagen = "https://via.placeholder.com/150",
    precio = 0,
    btnTexto = "Inscribirse",
    maxWidth = "max-w-sm"  // ← Nueva prop
  } = $props();
</script>



<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 {maxWidth} mx-auto">
  <!-- Imagen -->
  <div class="h-48 bg-gray-200 overflow-hidden">
    <img src={imagen} alt={titulo} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
  </div>
    
  <!-- Contenido -->
  <div class="p-6">
    <h3 class="text-xl font-heading font-bold text-primary mb-3 line-clamp-2">
      {titulo}
    </h3>
    
    <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
      {descripcion}
    </p>
    
    <!-- Especificaciones -->
    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
      <div class="flex items-center gap-1">
        <span>🕒</span>
        <span>{duracion}</span>
      </div>
      <div class="flex items-center gap-1">
        <span>💻</span>
        <span>{modalidad}</span>
      </div>
    </div>
    
    <!-- Precio y botón -->
    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
      <div>
        <span class="text-2xl font-bold text-primary">$ {precio}</span>
      </div>
      <button class="bg-primary hover:bg-gray-800 text-whiteColor font-semibold py-2 px-6 rounded-lg transition-colors">
        {btnTexto}
      </button>
    </div>
  </div>
</div>