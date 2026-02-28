<script lang="ts">
  import type { Capacitacion, CapacitacionDetalle } from "$lib/domain/capacitacion";
  import { capacitacionesService } from "$lib/services/capacitacionesService";


  export let cap: Capacitacion
  let capDetalle: CapacitacionDetalle | null = null

  let disponible = cap.cupos > 0
  let showModal = false;

  $: if (showModal) {
    cargarDetalle()
  }

  $: console.log("IMG URL:", cap.imgURL)

  async function cargarDetalle() {
    try {
      capDetalle = await capacitacionesService.getCapacitacionessById(cap.id!);
    } catch (error) {
      console.error('Error cargando detalle:', error);
    }
  }

  const disponibleTexto = disponible ? "Cupos disponibles" : "Cupos agotados";
  const disponibleColor = disponible ? "badge-success" : "badge-error";

  type MembresiaDates = {
    text: string,
    bgColor: string,
  };

  const membresiasDates : Record<number, MembresiaDates>  = {
    1: {
      text: "Esencial+",
      bgColor: "greenLight"
    },
    2: {
      text: "Profesional+",
      bgColor: "greenLight"
    },
    3: {
      text: "Corporativo+",
      bgColor: "greenLight"
    }
  }
</script>



<div
  class="card bg-white shadow-md hover:shadow-xl transition-all rounded-xl overflow-hidden border border-gray-100"
>
  <!-- Imagen -->
  <figure class="w-full h-48 overflow-hidden bg-gray-100">
    <img
      src={cap.imgURL}
      class="w-full h-full object-cover"
      alt={cap.capacitacion}
    />
  </figure>

  <div class="card-body px-6 py-5">
    <div class="badge badge-sm bg-secondary/20 text-secondary border-none">
      {cap.categoria}
    </div>

    <h2 class="line-clamp-2 text-xl font-bold min-h-[3.5rem] text-lg font-bold text-primary mt-2">{cap.capacitacion}</h2>

    <p class="text-gray-600 text-sm">
      Dictado por <span class="font-semibold">{cap.consultor}</span>
    </p>

    <div class="flex flex-wrap gap-2 mt-3 text-xs">
      <div class="badge badge-outline">{cap.duracion}</div>
      <div class="badge badge-outline">{cap.modalidad}</div>
    </div>

    <div class="mt-3 flex">
   
      {#if cap.nivel_minimo > 0}
       <div class="inline-flex items-stretch text-sm font-medium">

        <!-- Parte izquierda -->
        <span
          class={`badge badge-lg rounded-l-xl rounded-r-none px-3 py-1 text-xs ${disponibleColor}`}
        >
          {disponibleTexto}
        </span>

        <!-- Parte derecha -->
        <span
          class={`badge badge-lg rounded-r-xl rounded-l-none px-3 py-1 ${
            membresiasDates[cap.nivel_minimo].bgColor
          }`}
        >
          {membresiasDates[cap.nivel_minimo].text}
        </span>

      </div>
      {:else}
        <span class={"badge badge-lg " + disponibleColor}>
          {disponibleTexto}
        </span>
      {/if}
    </div>

   <div
    class={
      "mt-4 w-full text-center font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 border " +
      (disponible
        ? "border-primary text-primary hover:bg-primary hover:text-whiteColor cursor-pointer"
        : "border-gray-300 text-gray-400 bg-gray-100 opacity-60 cursor-not-allowed")
    }
  >
    <button
      class="w-full"
      on:click={() => disponible && (showModal = true) }
      disabled={!disponible}
    >
      {disponible ? "Ver más" : "Sin cupo"}
    </button>
  </div>

  </div>
</div>


<!-- 🌟 MODAL ESTILIZADO -->
{#if showModal && capDetalle}
<div 
  class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
>
  <div 
    class="bg-whiteColor rounded-2xl shadow-2xl max-w-lg w-full p-8 mx-4 animate-scaleIn border border-primary/10"
  >
    <!-- Título -->
    <h3 class="text-2xl font-heading font-semibold text-primary mb-4">
      {capDetalle.capacitacion}
    </h3>

    <!-- Descripción -->
    <p class="text-primaryFontColor leading-relaxed mb-6 text-[15px]">
      {capDetalle.descripcion}
    </p>

    <!-- Badges -->
    <div class="flex flex-wrap gap-3 mb-6">
      <span class="badge badge-outline text-sm px-3 py-2">{capDetalle.duracion}</span>
      <span class="badge badge-outline text-sm px-3 py-2">{capDetalle.modalidad}</span>
      <span class="badge bg-secondary/20 text-secondary border-none text-sm px-3 py-2">
        {capDetalle.categoria}
      </span>
    </div>

    <!-- Docente -->
    <p class="text-sm text-gray-600 mb-2">
      Docente: <span class="font-semibold">{capDetalle.consultor}</span>
    </p>

    <!-- Acciones -->
    <div class="flex justify-end gap-3 mt-8">
      <!-- Botón cerrar -->
      <button 
        class="px-5 py-2.5 rounded-lg border border-primary text-primary font-semibold 
               hover:bg-primary hover:text-whiteColor transition-all"
        on:click={() => showModal = false}
      >
        Cerrar
      </button>

      <!-- Botón inscribirme -->
      <button 
        class="px-5 py-2.5 rounded-lg bg-secondary text-white font-semibold 
               hover:bg-secondary/90 transition-all shadow-md"
      >
        Inscribirme
      </button>
    </div>
  </div>
</div>
{/if}



<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.25s ease-out;
  }

  @keyframes scaleIn {
    from { transform: scale(0.9); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }
  .animate-scaleIn {
    animation: scaleIn 0.25s ease-out;
  }
</style>
