<script lang="ts">
    import Section from "$lib/components/section/Section.svelte";
    import CardCapacitacion from "$lib/components/cards/CardCapacitacion.svelte";
  
    let capacitaciones = [
        {
            id: 1,
            titulo: "Diplomacia Moderna: Relaciones entre China y América Latina",
            categoria: "Geopolítica",
            duracion: "6 semanas",
            modalidad: "Online",
            descripcion: "Un análisis profundo sobre la influencia estratégica de China en la región, sus iniciativas de comercio, inversión y cooperación internacional.",
            imagen: "https://fotos.perfil.com/2024/11/15/xi-jinping-america-latina-20241114-1912319.jpg",
            docente: "Emb. Laura Fernández",
            cupos: 40,
            disponible: true
        },
        {
            id: 2,
            titulo: "Negociación Internacional y Resolución de Conflictos",
            categoria: "Diplomacia",
            duracion: "4 semanas",
            modalidad: "Presencial",
            descripcion: "Taller práctico para desarrollar habilidades efectivas de negociación en contextos diplomáticos y multilaterales.",
            imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
            docente: "Lic. Martín De Luca",
            cupos: 25,
            disponible: true
        },
        {
            id: 3,
            titulo: "Comercio Exterior y Estrategias de Exportación",
            categoria: "Economía Internacional",
            duracion: "5 semanas",
            modalidad: "Online",
            descripcion: "Capacitación centrada en estrategias para exportar, diversificar mercados y entender acuerdos comerciales.",
            imagen: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800",
            docente: "Dra. Sofía Daneri",
            cupos: 50,
            disponible: true
        },
        {
            id: 4,
            titulo: "Introducción al Análisis Geopolítico",
            categoria: "Geopolítica",
            duracion: "3 semanas",
            modalidad: "Online",
            descripcion: "Curso inicial para comprender dinámicas globales, actores internacionales y escenarios futuros.",
            imagen: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800",
            docente: "Prof. Federico Molina",
            cupos: 0,
            disponible: false
        }
    ];

    let terminoBusqueda = "";
    let capacitacionesFiltradas = capacitaciones;

    function filtrarCapacitaciones() {
        const term = terminoBusqueda.toLowerCase().trim();

        if (!term) {
            capacitacionesFiltradas = capacitaciones;
            return;
        }

        capacitacionesFiltradas = capacitaciones.filter(c =>
            c.titulo.toLowerCase().includes(term) ||
            c.categoria.toLowerCase().includes(term) ||
            c.docente.toLowerCase().includes(term) ||
            c.descripcion.toLowerCase().includes(term)
        );
    }

    // ❗ Mismo comportamiento que el componente que funciona
    $: if (terminoBusqueda !== undefined) {
        filtrarCapacitaciones();
    }
</script>

<!-- HERO -->
<Section class="bg-primary text-white py-20 ">
  <div class="max-w-5xl mx-auto text-center px-6">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
      Capacitate con los líderes del mañana
    </h1>
    <p class="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
      Programas de formación dictados por expertos en relaciones internacionales, transformación digital y gestión estratégica.
    </p>
  </div>
</Section>

<!-- BUSCADOR -->
<Section class="py-12 bg-whiteBGLite">
  <div class="max-w-4xl mx-auto px-6">

    <div class="mb-8">
      <label for="buscador" class="block text-lg font-semibold text-primary mb-4 text-center">
        Encontrá la formación que necesitás
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

    <!-- CONTADOR -->
    <p class="text-center text-gray-600 mb-10">
      {capacitacionesFiltradas.length}
      {capacitacionesFiltradas.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
      {terminoBusqueda && ` para "${terminoBusqueda}"`}
    </p>

    <!-- GRID DE CARDS -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each capacitacionesFiltradas as cap}
        <CardCapacitacion {cap} />
      {/each}
    </div>

  </div>
</Section>
