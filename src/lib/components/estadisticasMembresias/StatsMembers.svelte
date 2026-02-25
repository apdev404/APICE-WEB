<script lang="ts">
  import { Licencia } from "$lib/domain/licencia";
  import type { Solicitud } from "$lib/domain/solicitud";
  import TortaGraphic from "../stats/tortaGraphic/TortaGraphic.svelte";

  const { licencias, solicitudes } = $props<{
    licencias: Licencia[];
    solicitudes: Solicitud[];
  }>();

  const soliAprobadas = solicitudes.filter((it: Solicitud) => it.estado === 'aprobada').length;
  const soliPendientes = solicitudes.filter((it: Solicitud) => it.estado === 'pendiente').length;
  const soliRechazadas = solicitudes.filter((it: Solicitud) => it.estado === 'rechazada').length;

  const licenBasicas = licencias.filter((it: Licencia) => it.nivel === 1).length;
  const licenMedias = licencias.filter((it: Licencia) => it.nivel === 2).length;
  const licenAltas = licencias.filter((it: Licencia) => it.nivel === 3).length;
</script>

<div class="w-full space-y-6">

  <!-- 🔹 Sección superior -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center justify-center">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">
        Estadisticas membresias
      </h2> 
      <TortaGraphic
        labels={['Esencial', 'Profesional', 'Corporativo']}
        data={[licenBasicas, licenMedias, licenAltas]}
      />
    </div>

    <!-- 🟢 Gráfico -->
    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center justify-center">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">
        Estadisticas solicitudes
      </h2> 
      <TortaGraphic
        labels={['Pendientes', 'Aprobadas', 'Rechazadas']}
        data={[soliPendientes, soliAprobadas, soliRechazadas]}
      />
    </div>

  </div>

  <!-- 🔹 Sección inferior full width -->
  <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
    <h2 class="text-lg font-semibold mb-4 text-gray-700">
      Estadísticas adicionales
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

      <div class="bg-gray-50 rounded-xl p-4">
        <p class="text-sm text-gray-500">Total solicitudes</p>
        <p class="text-xl font-bold">
          {soliPendientes + soliAprobadas + soliRechazadas}
        </p>
      </div>

      <div class="bg-gray-50 rounded-xl p-4">
        <p class="text-sm text-gray-500">Licencias activas</p>
        <p class="text-xl font-bold">
          {licencias.filter((l: Licencia) => l.activo).length}
        </p>
      </div>

      <div class="bg-gray-50 rounded-xl p-4">
        <p class="text-sm text-gray-500">Total licencias</p>
        <p class="text-xl font-bold">
          {licencias.length}
        </p>
      </div>

      <div class="bg-gray-50 rounded-xl p-4">
        <p class="text-sm text-gray-500">% aprobación</p>
        <p class="text-xl font-bold">
          {soliAprobadas > 0 
            ? Math.round((soliAprobadas / (soliPendientes + soliAprobadas + soliRechazadas)) * 100)
            : 0}%
        </p>
      </div>

    </div>
  </div>

</div>