<script lang="ts">
  import { Licencia } from "$lib/domain/licencia";

  const { licencias } = $props<{
    licencias: Licencia[];
  }>();
</script>

<div class="w-full overflow-x-auto rounded-2xl shadow-lg border border-greenLight">
  <table class="w-full border-collapse text-sm lg:text-base">
    <thead class="bg-primary text-whiteColor">
      <tr>
        <th class="px-4 py-3 border border-greenLight text-left">#</th>
        <th class="px-4 py-3 border border-greenLight text-left">Email</th>
        <th class="px-4 py-3 border border-greenLight text-left">Nivel Membresia</th>
        <th class="px-4 py-3 border border-greenLight text-left">Fecha</th>
        <th class="px-4 py-3 border border-greenLight text-center">Estado</th>
        <th class="px-4 py-3 border border-greenLight text-center">Duracion dias</th>
      </tr>
    </thead>

    <tbody class="bg-white">
      {#each licencias as licencia}
        <tr class="hover:bg-whiteBGLite transition-colors duration-200">
          <td class="px-4 py-3 border border-greenLight">{licencia.id}</td>
          <td class="px-4 py-3 border border-greenLight">{licencia.email}</td>
          <td class="px-4 py-3 border border-greenLight">{licencia.nivel}</td>
          <td class="px-4 py-3 border border-greenLight">{licencia.created_at.toLocaleString()}</td>
          <td class="px-4 py-3 border border-greenLight text-center">
            {#if licencia.estado === 'activa'}
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-greenAP text-white">
                  Activa
                </span>
            {:else}
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-white">
                  Inactiva
                </span> 
            {/if}
          </td>
          <td class="px-4 py-3 border border-greenLight">{licencia.duracion_dias}</td>
          
        </tr>
      {/each}
    </tbody>
  </table>
</div>