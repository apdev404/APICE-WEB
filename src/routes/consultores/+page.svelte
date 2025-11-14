<script lang="ts">
  import CardConsultor from "$lib/components/cards/CardConsultor.svelte";
  import Section from "$lib/components/section/Section.svelte";
  
  let consultores = [
    {
      id: 1,
      nombre: "Dr. Carlos Rodríguez",
      especialidad: "Transformación Digital",
      experiencia: "15 años",
      descripcion: "Especialista en implementación de tecnologías emergentes y transformación organizacional.",
      foto: "https://img.freepik.com/foto-gratis/profesor-aspecto-inteligente_53876-23045.jpg?semt=ais_hybrid&w=740&q=80",
      contacto: {
        telefono: "+5491112345678",
        email: "c.rodriguez@apice.com"
      },
      disponible: true
    },
    {
      id: 2,
      nombre: "Lic. María González", 
      especialidad: "Gestión Estratégica",
      experiencia: "12 años",
      descripcion: "Consultora en estrategia empresarial y planificación organizacional.",
      foto: "https://img.freepik.com/foto-gratis/retrato-mujer-negocios-oficina_1398-6.jpg?semt=ais_hybrid&w=740&q=80",
      contacto: {
        telefono: "+549115554321", 
        email: "m.gonzalez@apice.com"
      },
      disponible: true
    },
    {
      id: 3,
      nombre: "Lic. Julio Gomez", 
      especialidad: "Gestión Estratégica",
      experiencia: "9 años",
      descripcion: "Consultora en estrategia empresarial y planificación organizacional.",
      foto: "https://antoniovallsabogados.com/wp-content/uploads/2025/02/antoniovalls-toni-00.jpg",
      contacto: {
        telefono: "+549115554321", 
        email: "m.gonzalez@apice.com"
      },
      disponible: true
    },
    {
      id: 4,
      nombre: "Lic. Monica Ramirez", 
      especialidad: "Gestión Estratégica",
      experiencia: "9 años",
      descripcion: "Consultora en estrategia empresarial y planificación organizacional.",
      foto: "https://thumbs.dreamstime.com/b/la-mujer-joven-est%C3%A1-hojeando-un-fichero-43322945.jpg",
      contacto: {
        telefono: "+549115554321", 
        email: "m.gonzalez@apice.com"
      },
      disponible: false
    }

  ];

  let terminoBusqueda = '';
  let consultoresFiltrados = consultores;

  function filtrarConsultores() {
    if (!terminoBusqueda.trim()) {
      consultoresFiltrados = consultores;
      return;
    }
    
    consultoresFiltrados = consultores.filter(consultor =>
      consultor.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      consultor.especialidad.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
  }

  $: if (terminoBusqueda !== undefined) {
    filtrarConsultores();
  }
</script>

<!-- El resto del código igual -->
<!-- Hero Section -->
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

<!-- Buscador y Filtros -->
<Section class="py-10 lg:py-20 bg-whiteBGLite">
  <div class="max-w-4xl mx-auto px-6">
    <!-- Buscador -->
    <div class="mb-8">
      <label for="buscador" class="block text-lg font-semibold text-primary mb-4 text-center">
        Encontrá al consultor ideal
      </label>
       <div class="relative max-w-2xl mx-auto">
        <input 
          id="buscador"
          type="text" 
          bind:value={terminoBusqueda}
          placeholder="Buscar por título, categoría o docente..."
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
        {consultoresFiltrados.length} {consultoresFiltrados.length === 1 ? 'consultor encontrado' : 'consultores encontrados'}
        {terminoBusqueda && ` para "${terminoBusqueda}"`}
      </p>
    </div>
  </div>
</Section>


<!-- Grid de Consultores -->
<Section class={"pb-16 lg:pb-20 bg-whiteBGLite"}>
  <div class="max-w-7xl mx-auto px-6">
    {#if consultoresFiltrados.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each consultoresFiltrados as consultor}
          <CardConsultor
            {...consultor}
          />
        {/each}
      </div>
    {:else}
      <!-- Estado vacío -->
      <div class="text-center py-16">
        <i class="ph-thin ph-users-three text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-2xl font-heading font-semibold text-gray-600 mb-2">
          No se encontraron consultores
        </h3>
        <p class="text-gray-500 max-w-md mx-auto">
          {terminoBusqueda ? 
            `No hay resultados para "${terminoBusqueda}". Intenta con otros términos.` : 
            'Pronto agregaremos más consultores a nuestra red.'
          }
        </p>
        {#if terminoBusqueda}
          <button 
            on:click={() => terminoBusqueda = ''}
            class="mt-4 text-secondary hover:text-orange-600 font-semibold transition-colors"
          >
            Ver todos los consultores
          </button>
        {/if}
      </div>
    {/if}
  </div>
</Section>


<!-- CTA Section -->
<section class="bg-primary text-whiteColor py-16">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-3xl font-heading font-bold mb-4">
      ¿No encontrás lo que buscás?
    </h2>
    <p class="text-xl text-whiteColor/80 mb-8 max-w-2xl mx-auto">
      Contanos sobre tu proyecto y te ayudaremos a encontrar el consultor perfecto.
    </p>
    <a 
      href="/contacto" 
      class="inline-block bg-secondary hover:bg-orange-600 text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
    >
      Contactanos
    </a>
  </div>
</section>