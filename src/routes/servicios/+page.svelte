<script lang="ts">
  import Section from "$lib/components/section/Section.svelte";
  import Capacitaciones from "$lib/components/capacitaciones/Capacitaciones.svelte";
  import Consultores from "$lib/components/consultores/Consultores.svelte";
  import { consultoresService } from "$lib/services/consultoresService.js";
  import { showError } from "$lib/domain/errorHandler.js";
  import { debounce } from "$lib/utils/DebounceSearch.js";
  import { Consultor } from "$lib/domain/consultor.js";
  import type { Capacitacion } from "$lib/domain/capacitacion.js";
  import { capacitacionesService } from "$lib/services/capacitacionesService.js";

  const { data } = $props();
  let consultores: Consultor[] = $state(data.consultores);
  let capacitaciones: Capacitacion[] = $state(data.capacitaciones);
  
  async function buscarConsultores(text: string){
    try{
      consultores = await consultoresService.getConsultoresByText(text)

    }catch(error){
      showError("Ha ocurrido un error al buscar los consultores: ",error)
    }
  }

  const busquedaDebounceConsultores = debounce(buscarConsultores, 300)


  async function buscarCapacitaciones(text: string){
    try{
      capacitaciones = await capacitacionesService.getCapacitacionesByText(text)
      console.log(capacitaciones)
    }catch(error){
      showError("Ha ocurrido un error al buscar las capacitaciones: ",error)
    }
  }

  const busquedaDebounceCapacitaciones = debounce(buscarCapacitaciones, 300)

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

<Capacitaciones capacitaciones= {capacitaciones}
  on:buscaCapacitaciones={(e)  => busquedaDebounceCapacitaciones(e.detail)}
/>

<section id="consultores">
  <Consultores consultores= {consultores}
  on:buscaConsultores={(e)  => busquedaDebounceConsultores(e.detail)}
  />
</section>