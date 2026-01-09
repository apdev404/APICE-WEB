<script>
  import Section from "$lib/components/section/Section.svelte";
  import CardMembresia from "$lib/components/cards/CardMembresia.svelte";

  const membresias = [
    {
      nombre: "Esencial",
      precio: "$0",
      tag: "Ideal para empezar",
      icono: "ph ph-star",
      publico: "Personas o pymes que recién empiezan en comercio exterior.",
      beneficios: [
        { texto: "Acceso a informes básicos", activo: true },
        { texto: "Asesoría estratégica inicial", activo: true },
        { texto: "Capacitaciones incluidas", activo: false },
        { texto: "Acceso a capacitaciones grupales", activo: false },
      ],
    },
    {
      nombre: "Profesional",
      precio: "$49",
      tag: "Más elegido",
      destacado: true,
      icono: "ph ph-medal",
      publico: "Empresas que ya operan y quieren ordenar y mejorar procesos.",
      beneficios: [
        { texto: "Acceso a informes avanzados", activo: true },
        { texto: "Descuento en cursos y capacitaciones", activo: true },
        { texto: "Acceso a capacitaciones grupales", activo: true },
        { texto: "Capacitación incluida sin cargo", activo: false },
      ],
    },
    {
      nombre: "Corporativo",
      precio: "$99",
      tag: "Nivel premium",
      icono: "ph ph-crown",
      publico: "Empresas con operaciones complejas o de gran escala.",
      beneficios: [
        { texto: "Acceso total a informes estratégicos", activo: true },
        { texto: "1 capacitación incluida sin cargo", activo: true },
        { texto: "Acceso prioritario a todos los cursos", activo: true },
        { texto: "Soporte personalizado", activo: true },
      ],
    },
  ];
</script>


<Section class="bg-primary text-white py-20 max-w-5xl mx-auto text-center px-6">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
      BIENVENIDO A LAS MEMBRESIAS
    </h1>
    <p class="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
      Accede a beneficios exclusivos con nuestras membresias
    </p>
</Section>

<Section class="py-20 bg-whiteBGLite">
  <div class="flex flex-col items-center">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {#each membresias as m}
            <CardMembresia
              nombre={m.nombre}
              precio={m.precio}
              tag={m.tag}
              icono={m.icono}
              publico={m.publico}
              destacado={m.destacado}
              beneficios={m.beneficios}
            />
        {/each}
        </div>
    <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Sobre las membresias
        </h2>
        <p class="text-xl text-primary/80 mb-8 font-alternative">
            Las capacitaciones de Ápice complementan nuestros planes de acompañamiento, fortaleciendo las capacidades internas de cada organización
        </p>
    </div>
    </div>
  </div>
</Section>

