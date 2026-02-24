<script lang="ts">
    import { Solicitud } from '$lib/domain/solicitud.js';
    import { solicitudService } from '$lib/services/solicitudesService.js';
    import { showError } from '$lib/domain/errorHandler.js';

    const { data } = $props();
    let solicitudes: Solicitud[] = $state(data.solicitudes);
    
    async function confirmarSolicitud(id: string) {
        try {
            await solicitudService.confirmarSolicitud(id)
        } catch (error) {
            showError("Error al confirmar solicitud", error)
        }
    }
</script>

    
<section class="w-full min-h-screen bg-whiteColor text-primaryFontColor px-6 lg:px-12 py-10">
    <div class="mb-10">
        <img 
            src="/images/logos/LOGO-POSITIVO-APICE.png" 
            alt="APICE"
            class="h-40 md:h-56 lg:h-32 w-auto mx-auto 
                    drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]
                    drop-shadow-[0_0_60px_rgba(0,0,0,0.6)]
                    brightness-110 contrast-110"
        />  
    </div>

    <h2 class="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
        Solicitudes de Membresía
    </h2>

    <div class="w-full overflow-x-auto rounded-2xl shadow-lg border border-greenLight">

        <table class="w-full border-collapse text-sm lg:text-base">

        <!-- HEAD -->
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

        <!-- BODY -->
        <tbody class="bg-white">

            {#each solicitudes as solicitud}
            <tr class="hover:bg-whiteBGLite transition-colors duration-200">

                <td class="px-4 py-3 border border-greenLight">
                {solicitud.id}
                </td>

                <td class="px-4 py-3 border border-greenLight font-medium">
                {solicitud.nombre}
                </td>

                <td class="px-4 py-3 border border-greenLight">
                {solicitud.email}
                </td>

                <td class="px-4 py-3 border border-greenLight">
                {solicitud.membresia}
                </td>

                <td class="px-4 py-3 border border-greenLight">
                {solicitud.fecha}
                </td>

                <td class="px-4 py-3 border border-greenLight text-center">
                {#if solicitud.estado === 'pendiente'}
                    <span class="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-white">
                    Pendiente
                    </span>
                {:else if solicitud.estado === 'activa'}
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
                    <button class="px-3 py-1 text-xs rounded-lg bg-secondary text-white hover:opacity-90 transition"
                        onclick={() => confirmarSolicitud(solicitud.id)}
                    >
                    Confirmar
                    </button>
                {/if}

                <button class="px-3 py-1 text-xs rounded-lg bg-greenLight text-white hover:opacity-90 transition">
                    Ver
                </button>

                </td>

            </tr>
            {/each}

        </tbody>

        </table>
    </div>
</section>