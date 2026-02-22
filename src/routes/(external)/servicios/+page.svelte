<script lang="ts">
  import Section from "$lib/components/section/Section.svelte";
  import Consultores from "$lib/components/consultores/Consultores.svelte";
  import { consultoresService } from "$lib/services/consultoresService.js";
  import { showError } from "$lib/domain/errorHandler.js";
  import { debounce } from "$lib/utils/DebounceSearch.js";
  import { Consultor } from "$lib/domain/consultor.js";
  import ButtonLink from "$lib/components/buttons/ButtonLink.svelte";

  const { data } = $props();
  let consultores: Consultor[] = $state(data.consultores);
  
  async function buscarConsultores(text: string){
    try{
      consultores = await consultoresService.getConsultoresByText(text)

    }catch(error){
      showError("Ha ocurrido un error al buscar los consultores: ",error)
    }
  }

  const busquedaDebounceConsultores = debounce(buscarConsultores, 300)


  const servicios = [
    {
      icono: "ph ph-globe-hemisphere-west",
      titulo: "Comercio Exterior",
      texto:
        "Asesoramiento experto para instituciones, empresas y gobiernos en temas de geopolítica, diplomacia y análisis internacional.",
      link: "comExt"
    },
    {
      icono: "ph ph-chalkboard-teacher",
      titulo: "Diplomacia Corporativa",
      texto:
        "Programas formativos personalizados, adaptados a las necesidades de cada equipo o institución.",
      link: "dipCorpo"
    },
    {
      icono: "ph ph-handshake",
      titulo: "Relaciones internacionales",
      texto:
        "Entrenamiento y acompañamiento en procesos de negociación multilateral y diplomática.",
      link: "relIntern"
    },
    {
      icono: "ph ph-briefcase",
      titulo: "Analisis geopolitico",
      texto:
        "Acompañamiento integral en estrategias de exportación, competitividad y acuerdos comerciales.",
      link: "anGeo"
    },
    {
      icono: "ph ph-briefcase",
      titulo: "Capacitaciones y Formacion Empresarial",
      texto:
        "Accede a nuestras capacitaciones con nuestras membresias",
      link: "capFormEmpre"
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
  <div class="flex flex-col items-center">
  <!--   
   
    <div class="dropdown dropdown-center mb-8">
      <div tabindex="0" role="button" class="btn m-1 bg-secondary">Solicitar SERVICIO</div>
      <ul tabindex="-1" class="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
        {#each servicios as s}
          <li>
            <a
              class="flex items-center gap-3 px-4 py-2 rounded-lg 
                    text-primary font-medium 
                    hover:bg-secondary/10 hover:text-secondary 
                    transition-all duration-200"
            >
              <i class={"ph ph-arrow-right text-secondary/70"}></i>
              {s.titulo}
            </a>
          </li>
        {/each}
      </ul>
    </div>
-->
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- GRID -->
      <div class="flex flex-col gap-4">
        {#each servicios as s}
         <div
            class="group bg-white shadow-md hover:shadow-xl transition-all border border-gray-200 rounded-xl p-8 
                  hover:-translate-y-1 cursor-default flex items-start gap-6"
            id={s.link}
          >
            <!-- Icono -->
            <div
              class="w-16 h-16 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center
                    group-hover:bg-secondary/20 transition-all"
            >
              <i class={"text-secondary text-4xl " + s.icono}></i>
            </div>

            <!-- Texto -->
            <div class="flex flex-col text-left">
              <h3 class="text-xl font-semibold text-primary">
                {s.titulo}
              </h3>

              <p class="mt-2 text-gray-600 text-sm leading-relaxed text-justify">
                {s.texto}
              </p>
            </div>
          </div>

        {/each}
      </div>
    </div>
  </div>
</Section>

<section class="bg-primary text-whiteColor py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6">
        CAPACITACIONES
      </h1>
      <p class="text-xl text-whiteColor/80 max-w-3xl mx-auto leading-relaxed">
        Programas de formación dictados por expertos en relaciones internacionales, transformación digital y gestión estratégica.
      </p>
    </div>
</section>

<Section class="py-12 bg-whiteBGLite">
  <div class="flex flex-col items-center justify-center text-center gap-6 ">
        <ButtonLink tipo="primary" href="/capacitaciones" class="mt-2 h-20 text-2xl content-center">
          ACCEDER A CAPACITACIONES
        </ButtonLink>
    
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-primary max-w-2xl">
          Accedé a las capacitaciones con nuestras membresías
        </h1>

        <p class="text-gray-500 max-w-xl">
          Elegí el plan que mejor se adapta a tu objetivo y empezá hoy mismo a potenciar tu estrategia internacional.
        </p>

        <ButtonLink tipo="secondary" href="/membresias" class="mt-2">
          Ver Membresías
        </ButtonLink>
  </div>
</Section>

<section id="consultores">
  <Consultores consultores= {consultores}
  on:buscaConsultores={(e)  => busquedaDebounceConsultores(e.detail)}
  />
</section>