<script lang="ts">
  import type { Consultor } from '$lib/domain/consultor'

  export let consultor: Consultor
</script>



<div class="card-consultor bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col">
  
  <!-- Imagen del consultor -->
  <div class="h-64 bg-gray-200 overflow-hidden relative">
    <img 
      src={consultor.img_profile_url} 
      alt={consultor.nombre} 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    
    <!-- Estado de disponibilidad -->
    <div class="absolute top-4 left-4">
      <span class:bg-greenLight={consultor.disponibilidad} class:bg-secondary={!consultor.disponibilidad} 
             class="text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm">
        <div class="w-2 h-2 rounded-full bg-white"></div>
        {consultor.disponibilidad ? 'Disponible' : 'No disponible'}
      </span>
    </div>
  </div>
  
  <!-- Contenido -->
  <div class="p-6 flex-grow flex flex-col">
    <h3 class="text-xl font-heading font-bold text-primary mb-1">
      {consultor.nombre}
    </h3>
    
    <p class="text-secondary font-semibold mb-3">
      {consultor.especialidad}
    </p>
    
    <p class="text-gray-600 mb-4 leading-relaxed flex-grow">
      {consultor.descripcion}
    </p>
    
    <!-- Experiencia -->
    <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
      <i class="ph-thin ph-award"></i>
      <span>{consultor.anios_experiencia} de experiencia</span>
    </div>
    
    <!-- Botones de contacto -->
    <div class="flex flex-col gap-3 mt-auto">
      <a href={`tel:${consultor.telefono}`} 
         class="bg-primary hover:bg-gray-800 text-whiteColor text-center font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
        <i class="ph-thin ph-phone"></i>
        Contactar
      </a>
      
      <a href={`mailto:${consultor.email}`} 
         class="border border-primary text-primary hover:bg-primary hover:text-whiteColor text-center font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
        <i class="ph-thin ph-envelope"></i>
        Enviar email
      </a>
    </div>
  </div>
</div>