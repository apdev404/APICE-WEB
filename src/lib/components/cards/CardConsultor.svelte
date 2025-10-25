<script lang="ts">
  let {
    nombre,
    especialidad,
    experiencia,
    descripcion,
    foto,
    contacto,
    disponible = true
  } = $props();
</script>

<div class="card-consultor bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col">
  
  <!-- Imagen del consultor -->
  <div class="h-64 bg-gray-200 overflow-hidden relative">
    <img 
      src={foto} 
      alt={nombre} 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    
    <!-- Estado de disponibilidad -->
    <div class="absolute top-4 left-4">
      <span class:bg-green-500={disponible} class:bg-gray-500={!disponible} 
             class="text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm">
        <div class="w-2 h-2 rounded-full bg-white"></div>
        {disponible ? 'Disponible' : 'No disponible'}
      </span>
    </div>
  </div>
  
  <!-- Contenido -->
  <div class="p-6 flex-grow flex flex-col">
    <h3 class="text-xl font-heading font-bold text-primary mb-1">
      {nombre}
    </h3>
    
    <p class="text-secondary font-semibold mb-3">
      {especialidad}
    </p>
    
    <p class="text-gray-600 mb-4 leading-relaxed flex-grow">
      {descripcion}
    </p>
    
    <!-- Experiencia -->
    <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
      <i class="ph-thin ph-award"></i>
      <span>{experiencia} de experiencia</span>
    </div>
    
    <!-- Botones de contacto -->
    <div class="flex flex-col gap-3 mt-auto">
      <a href={`tel:${contacto.telefono}`} 
         class="bg-primary hover:bg-gray-800 text-whiteColor text-center font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
        <i class="ph-thin ph-phone"></i>
        Contactar
      </a>
      
      <a href={`mailto:${contacto.email}`} 
         class="border border-primary text-primary hover:bg-primary hover:text-whiteColor text-center font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
        <i class="ph-thin ph-envelope"></i>
        Enviar email
      </a>
    </div>
  </div>
</div>