<script lang="ts">
  import Section from "$lib/components/section/Section.svelte";
  import Consultores from "$lib/components/consultores/Consultores.svelte";
  import { consultoresService } from "$lib/services/consultoresService.js";
  import { showError } from "$lib/domain/errorHandler.js";
  import { debounce } from "$lib/utils/DebounceSearch.js";
  import type { Consultor } from "$lib/domain/consultor.js";
  import ButtonLink from "$lib/components/buttons/ButtonLink.svelte";

  const { data } = $props();
  let consultores = $state<Consultor[]>(data.consultores);
  
  async function buscarConsultores(query: { text: string, categoriaId: string }) {
    try {
      consultores = await consultoresService.getConsultoresByText(query.text, query.categoriaId);
    } catch (error) {
      showError("Ha ocurrido un error al buscar los consultores: ", error);
    }
  }

  const busquedaDebounceConsultores = debounce(buscarConsultores, 300);

  const servicios = [
    { icono: "ph ph-globe-hemisphere-west", titulo: "Comercio Exterior", texto: "Asesoramiento experto para instituciones y empresas en temas de geopolítica y diplomacia.", link: "comExt" },
    { icono: "ph ph-chalkboard-teacher", titulo: "Diplomacia Corporativa", texto: "Programas formativos personalizados, adaptados a las necesidades de cada equipo.", link: "dipCorpo" },
    { icono: "ph ph-handshake", titulo: "Relaciones internacionales", texto: "Entrenamiento y acompañamiento en procesos de negociación multilateral.", link: "relIntern" },
    { icono: "ph ph-briefcase", titulo: "Análisis geopolítico", texto: "Acompañamiento integral en estrategias de exportación y competitividad.", link: "anGeo" },
  ];
</script>

<Section class="bg-primary text-whiteColor py-24 text-center">
    <span class="text-secondary font-semibold tracking-widest uppercase text-sm">Soluciones Globales</span>
    <h1 class="text-4xl md:text-6xl font-heading font-bold mt-2">Nuestros Servicios</h1>
    <div class="w-24 h-1 bg-secondary mx-auto mt-6"></div>
    <p class="mt-6 text-whiteColor/70 text-lg max-w-2xl mx-auto font-sans">
      Brindamos soluciones profesionales en relaciones internacionales, análisis estratégico y formación especializada para el mundo de hoy.
    </p>
</Section>

<Section class="py-20 bg-whiteBGLite">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each servicios as s (s.link)}
        <div
          class="group bg-whiteColor shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-2xl p-8 flex items-start gap-6"
          id={s.link}
        >
          <div class="w-14 h-14 shrink-0 rounded-xl bg-primary text-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <i class={s.icono + " text-3xl"}></i>
          </div>

          <div class="flex flex-col text-left">
            <h3 class="text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors">
              {s.titulo}
            </h3>
            <p class="mt-2 text-primaryFontColor/70 text-sm leading-relaxed">
              {s.texto}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Section>

<section class="relative overflow-hidden bg-primary py-24">
    <div class="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2"></div>
    
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2 text-left">
          <h2 class="text-secondary font-bold tracking-tight text-sm uppercase mb-3">Formación de Élite</h2>
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-whiteColor mb-6 leading-tight">
            Potenciá tu Perfil con nuestras <span class="text-secondary">Capacitaciones</span>
          </h1>
          <p class="text-lg text-whiteColor/80 mb-8 leading-relaxed font-sans">
            Programas dictados por expertos en relaciones internacionales, transformación digital y gestión estratégica. No solo enseñamos teoría, brindamos herramientas para el campo real.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <ButtonLink tipo="primary" href="/capacitaciones" class="px-8 h-14 text-lg font-bold shadow-lg hover:shadow-secondary/20">
              EXPLORAR CURSOS
            </ButtonLink>
            <ButtonLink tipo="secondary" href="/membresias" class="px-8 h-14 text-lg font-semibold border-whiteColor/20 text-whiteColor hover:bg-whiteColor/10">
              VER MEMBRESÍAS
            </ButtonLink>
          </div>
        </div>

        <div class="lg:w-1/2 grid grid-cols-2 gap-4">
          <div class="bg-whiteColor/5 p-6 rounded-2xl border border-whiteColor/10 backdrop-blur-sm">
            <i class="ph ph-certificate text-secondary text-3xl mb-3"></i>
            <h4 class="text-whiteColor font-bold">Certificación</h4>
            <p class="text-whiteColor/50 text-xs mt-1">Validez internacional en cada programa.</p>
          </div>
          <div class="bg-whiteColor/5 p-6 rounded-2xl border border-whiteColor/10 backdrop-blur-sm mt-8">
            <i class="ph ph-users-four text-secondary text-3xl mb-3"></i>
            <h4 class="text-whiteColor font-bold">Networking</h4>
            <p class="text-whiteColor/50 text-xs mt-1">Conectá con líderes del sector.</p>
          </div>
        </div>
      </div>
    </div>
</section>

  <Consultores 
    {consultores} 
    onSearch={(query) => busquedaDebounceConsultores(query)} 
  />


<style>
  /* Ajuste suave para el scroll */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>