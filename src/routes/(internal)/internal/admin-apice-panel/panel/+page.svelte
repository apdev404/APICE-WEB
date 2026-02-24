<script lang="ts">
    import { Solicitud } from '$lib/domain/solicitud.js';
    import { solicitudService } from '$lib/services/solicitudesService.js';
    import { showError, showSuccess } from '$lib/domain/errorHandler.js';
    import Solicitudes from '$lib/components/solicitudes/Solicitudes.svelte';
    import Membresias from '$lib/components/membresias/Membresias.svelte';

    const { data } = $props();
    let solicitudes: Solicitud[] = $state(data.solicitudes);

    let activeTab = $state<'solicitudes' | 'membresias' | 'estadisticas'>('solicitudes');

    async function confirmarSolicitud(id: string, nombre: string) {
        try {
            await solicitudService.confirmarSolicitud(id);
            solicitudes = await solicitudService.getSolicitudes();
            showSuccess("Solicitud confirmada para: " + nombre);
        } catch (error) {
            showError("Error al confirmar solicitud", error);
        }
    }
</script>

<section class="w-full min-h-screen bg-whiteColor text-primaryFontColor px-6 lg:px-12 py-10">

    <!-- LOGO -->
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

    <!-- NAV TABS -->
    <div class="flex justify-center my-8">
        <div class="flex bg-white shadow-xl rounded-2xl overflow-hidden border border-greenLight">

            <button
                on:click={() => activeTab = 'solicitudes'}
                class={`px-6 py-3 flex items-center gap-2 transition-all duration-200 transform hover:scale-105
                ${activeTab === 'solicitudes'
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-greenLight'}`}
            >
                <i class="ph ph-archive"></i>
                Solicitudes
                <span class="text-xs px-2 py-0.5 rounded-full bg-secondary text-white">
                    {solicitudes.length}
                </span>
            </button>

            <button
                on:click={() => activeTab = 'membresias'}
                class={`px-6 py-3 transition-all duration-200 transform hover:scale-105
                ${activeTab === 'membresias'
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-greenLight'}`}
            >
                <i class="ph ph-medal"></i>
                Membresías activas
            </button>

            <button
                on:click={() => activeTab = 'estadisticas'}
                class={`px-6 py-3 transition-all duration-200 transform hover:scale-105
                ${activeTab === 'estadisticas'
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-greenLight'}`}
            >
                <i class="ph ph-chart-line-up"></i>
                Estadísticas
            </button>

        </div>
    </div>

    <!-- SOLICITUDES -->
    {#if activeTab === 'solicitudes'}
        <Solicitudes 
            solicitudes={solicitudes}
            onConfirmar={confirmarSolicitud}
        />
    {/if}

    <!-- MEMBRESIAS -->
    {#if activeTab === 'membresias'}
        <Membresias 
            solicitudes={solicitudes}
            onConfirmar={confirmarSolicitud}
        />
    {/if}

    <!-- ESTADISTICAS -->
    {#if activeTab === 'estadisticas'}
        <div class="text-center py-24 text-xl font-semibold text-primary">
            Aquí irán las estadísticas 📊
        </div>
    {/if}

</section>