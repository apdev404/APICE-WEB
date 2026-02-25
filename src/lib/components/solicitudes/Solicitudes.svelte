<script lang="ts">
  import type { Solicitud } from "$lib/domain/solicitud";

  const { solicitudes, onConfirmar, onRechazar } = $props<{
    solicitudes: Solicitud[];
    onConfirmar: (id: string, nombre: string) => void;
    onRechazar: (id: string, nombre: string) => void;
  }>();
</script>

<div class="w-full overflow-x-auto rounded-2xl shadow-lg border border-greenLight">
  <table class="w-full border-collapse text-sm lg:text-base">
    <thead class="bg-primary text-whiteColor">
      <tr>
        <th class="px-4 py-3 border border-greenLight text-left">#</th>
        <th class="px-4 py-3 border border-greenLight text-left">Nombre</th>
        <th class="px-4 py-3 border border-greenLight text-left">Email</th>
        <th class="px-4 py-3 border border-greenLight text-left">Membresía</th>
        <th class="px-4 py-3 border border-greenLight text-left">Fecha</th>
        <th class="px-4 py-3 border border-greenLight text-center">Estado</th>
        <th class="px-4 py-3 border border-greenLight text-center">Acciones</th>
      </tr>
    </thead>

    <tbody class="bg-white">
      {#each solicitudes as solicitud}
        <tr class="hover:bg-whiteBGLite transition-colors duration-200">
          <td class="px-4 py-3 border border-greenLight">{solicitud.id}</td>
          <td class="px-4 py-3 border border-greenLight font-medium">{solicitud.nombre}</td>
          <td class="px-4 py-3 border border-greenLight">{solicitud.email}</td>
          <td class="px-4 py-3 border border-greenLight">{solicitud.membresia}</td>
          <td class="px-4 py-3 border border-greenLight">{solicitud.fecha_solicitud.toLocaleString()}</td>

          <td class="px-4 py-3 border border-greenLight text-center">
            {#if solicitud.estado === 'pendiente'}
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-white">
                Pendiente
              </span>
            {:else if solicitud.estado === 'aprobada'}
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-greenAP text-white">
                Activa
              </span>
            {:else}
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-red text-white">
                Rechazada
              </span>
            {/if}
          </td>

          <td class="px-4 py-3 border border-greenLight text-center space-x-2">
            {#if solicitud.estado === 'pendiente'}
              <button
                class="px-3 py-1 text-xs rounded-lg bg-secondary text-white hover:opacity-90 transition"
                on:click={() => onConfirmar(solicitud.id, solicitud.nombre)}
              >
                Confirmar
              </button>
              <button
                class="px-3 py-1 text-xs rounded-lg bg-red text-white hover:opacity-90 transition"
                on:click={() => onRechazar(solicitud.id, solicitud.nombre)}
              >
                Rechazar
              </button>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>