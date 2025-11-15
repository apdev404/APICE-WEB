<script lang="ts">
  export let cap;
  let showModal = false;

  const disponibleTexto = cap.disponible ? "Cupos disponibles" : "Cupos agotados";
  const disponibleColor = cap.disponible ? "badge-success" : "badge-error";
</script>

<div
  class="card bg-white shadow-md hover:shadow-xl transition-all rounded-xl overflow-hidden border border-gray-100"
>
  <!-- Imagen -->
  <figure class="w-full h-48 overflow-hidden bg-gray-100">
    <img
      src={cap.imagen}
      class="w-full h-full object-cover"
      alt={cap.titulo}
    />
  </figure>

  <div class="card-body px-6 py-5">
    <div class="badge badge-sm bg-secondary/20 text-secondary border-none">
      {cap.categoria}
    </div>

    <h2 class="text-lg font-bold text-primary mt-2">{cap.titulo}</h2>

    <p class="text-gray-600 text-sm">
      Dictado por <span class="font-semibold">{cap.docente}</span>
    </p>

    <div class="flex flex-wrap gap-2 mt-3 text-xs">
      <div class="badge badge-outline">{cap.duracion}</div>
      <div class="badge badge-outline">{cap.modalidad}</div>
    </div>

    <div class="mt-3">
      <span class={"badge badge-lg " + disponibleColor}>
        {disponibleTexto}
      </span>
    </div>

   <div
    class={
      "mt-4 w-full text-center font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 border " +
      (cap.disponible
        ? "border-primary text-primary hover:bg-primary hover:text-whiteColor cursor-pointer"
        : "border-gray-300 text-gray-400 bg-gray-100 opacity-60 cursor-not-allowed")
    }
  >
    <button
      class="w-full"
      on:click={() => cap.disponible && (showModal = true)}
      disabled={!cap.disponible}
    >
      {cap.disponible ? "Ver más" : "Sin cupo"}
    </button>
  </div>

  </div>
</div>


<!-- 🌟 MODAL ESTILIZADO -->
{#if showModal}
<div 
  class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
>
  <div 
    class="bg-whiteColor rounded-2xl shadow-2xl max-w-lg w-full p-8 mx-4 animate-scaleIn border border-primary/10"
  >
    <!-- Título -->
    <h3 class="text-2xl font-heading font-semibold text-primary mb-4">
      {cap.titulo}
    </h3>

    <!-- Descripción -->
    <p class="text-primaryFontColor leading-relaxed mb-6 text-[15px]">
      {cap.descripcion}
    </p>

    <!-- Badges -->
    <div class="flex flex-wrap gap-3 mb-6">
      <span class="badge badge-outline text-sm px-3 py-2">{cap.duracion}</span>
      <span class="badge badge-outline text-sm px-3 py-2">{cap.modalidad}</span>
      <span class="badge bg-secondary/20 text-secondary border-none text-sm px-3 py-2">
        {cap.categoria}
      </span>
    </div>

    <!-- Docente -->
    <p class="text-sm text-gray-600 mb-2">
      Docente: <span class="font-semibold">{cap.docente}</span>
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
