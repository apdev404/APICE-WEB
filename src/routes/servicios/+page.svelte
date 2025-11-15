<script>
  import Section from "$lib/components/section/Section.svelte";

  const servicios = [
    {
      icono: "ph ph-globe-hemisphere-west",
      titulo: "Consultoría Estratégica",
      texto:
        "Asesoramiento experto para instituciones, empresas y gobiernos en temas de geopolítica, diplomacia y análisis internacional."
    },
    {
      icono: "ph ph-chalkboard-teacher",
      titulo: "Capacitaciones a Medida",
      texto:
        "Programas formativos personalizados, adaptados a las necesidades de cada equipo o institución."
    },
    {
      icono: "ph ph-file-text",
      titulo: "Informes y Análisis",
      texto:
        "Elaboración de informes profesionales basados en datos y tendencias globales para apoyar decisiones clave."
    },
    {
      icono: "ph ph-handshake",
      titulo: "Negociación y Resolución de Conflictos",
      texto:
        "Entrenamiento y acompañamiento en procesos de negociación multilateral y diplomática."
    },
    {
      icono: "ph ph-briefcase",
      titulo: "Asesoría en Comercio Exterior",
      texto:
        "Acompañamiento integral en estrategias de exportación, competitividad y acuerdos comerciales."
    },
    {
      icono: "ph ph-megaphone",
      titulo: "Diplomacia Pública",
      texto:
        "Diseño de estrategias de comunicación y posicionamiento internacional para instituciones."
    }
  ];
</script>

<Section class="bg-primary text-white py-20 max-w-5xl mx-auto text-center px-6">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
      Nuestros Servicios
    </h1>
    <p class="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
      Brindamos soluciones profesionales en relaciones internacionales, análisis estratégico y formación especializada.
    </p>
</Section>

<Section class="py-20 bg-whiteBGLite">
  <div class="max-w-6xl mx-auto px-6 text-center">

    <!-- GRID -->
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {#each servicios as s}
        <div
          class="group bg-white shadow-md hover:shadow-xl transition-all border border-gray-200 rounded-xl p-8 
                 hover:-translate-y-1 cursor-default"
        >
          <!-- Icono -->
          <div
            class="w-16 h-16 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-6
                   group-hover:bg-secondary/20 transition-all"
          >
            <i class={"text-secondary text-4xl " + s.icono}></i>
          </div>

          <h3 class="text-xl font-semibold text-primary mb-3">{s.titulo}</h3>

          <p class="text-gray-600 text-sm leading-relaxed">
            {s.texto}
          </p>
        </div>
      {/each}
    </div>
  </div>
</Section>
