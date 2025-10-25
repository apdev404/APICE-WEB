<script lang="ts">
  let { titulo, descripcion, ...rest } = $props();
  let formData = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  };
</script>

<form class="formulario-institucional bg-white p-8 max-w-2xl mx-auto">
  <!-- Header más minimalista -->
  <div class="text-center mb-8">
    <h2 class="text-2xl font-heading font-bold text-primaryFontColor mb-2">{titulo}</h2>
    <p class="text-gray-600">{descripcion}</p>
  </div>
  
  <!-- Campos sin bordes visibles, solo línea inferior -->
  <div class="text-primaryFontColor grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <!-- Nombre -->
    <div class="space-y-1">
      <label class="block text-sm font-semibold text-primary">Nombre completo *</label>
      <input 
        type="text" 
        bind:value={formData.nombre}
        class="w-full px-3 py-3 border-b-2 border-gray-300 focus:border-secondary bg-transparent focus:outline-none transition-colors"
        required
        placeholder="Tu nombre completo"
      />
    </div>
    
    <!-- Email -->
    <div class="space-y-1 ">
      <label class="block text-sm font-semibold text-primary">Email *</label>
      <input 
        type="email" 
        bind:value={formData.email}
        class="w-full px-3 py-3 border-b-2 border-gray-300 focus:border-secondary bg-transparent focus:outline-none transition-colors"
        required
        placeholder="tu@email.com"
      />
    </div>
    
    <!-- Teléfono -->
    <div class="space-y-1">
      <label class="block text-sm font-semibold text-primary">Teléfono</label>
      <input 
        type="tel" 
        bind:value={formData.telefono}
        class="w-full px-3 py-3 border-b-2 border-gray-300 focus:border-secondary bg-transparent focus:outline-none transition-colors"
        placeholder="+54 9 11 1234-5678"
      />
    </div>
    
    <!-- Asunto -->
    <div class="space-y-1">
      <label class="block text-sm font-semibold text-primary">Asunto *</label>
      <select 
        bind:value={formData.asunto}
        class="w-full px-3 py-3 border-b-2 border-gray-300 focus:border-secondary bg-transparent focus:outline-none transition-colors appearance-none"
        required
      >
        <option value="" disabled selected>Seleccionar asunto</option>
        <option value="consulta">Consulta general</option>
        <option value="capacitacion">Información de capacitaciones</option>
        <option value="consultoria">Servicios de consultoría</option>
        <option value="otro">Otro</option>
      </select>
    </div>
  </div>
  
  <!-- Mensaje -->
  <div class="space-y-1 mb-8 text-primaryFontColor">
    <label class="block text-sm font-semibold text-primary">Mensaje *</label>
    <textarea 
      bind:value={formData.mensaje}
      rows="4"
      class="w-full px-3 py-3 border-b-2 border-gray-300 focus:border-secondary bg-transparent focus:outline-none transition-colors resize-none"
      required
      placeholder="Escribe tu mensaje aquí..."
    ></textarea>
  </div>
  
  <!-- Submit más oscuro -->
  <button 
    type="submit"
    class="w-full bg-primary hover:bg-gray-900 text-whiteColor font-semibold py-3 rounded transition-colors shadow hover:shadow-md"
  >
    Enviar consulta
  </button>
  
  <!-- Info minimalista -->
  <p class="text-center text-gray-500 text-xs mt-4">
    * Campos obligatorios
  </p>
</form>

<style>
  /* Estilo personalizado para el select */
  select {
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
</style>