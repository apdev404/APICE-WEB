<script lang="ts">
    import Section from "$lib/components/section/Section.svelte";
    import CardCapacitacion from "$lib/components/cards/CardCapacitacion.svelte";
    import ButtonLink from "../buttons/ButtonLink.svelte";  
    import { createEventDispatcher } from "svelte";
    import type { Capacitacion } from "$lib/domain/capacitacion";

    const dispatch = createEventDispatcher();
    let { capacitaciones = [] } = $props<{ capacitaciones: Capacitacion[] }>();

    let textBusqueda = $state('');

    function buscar() {
        dispatch('buscaCapacitaciones', { text: textBusqueda, tipo: 'miembros' });
    }
</script>

<div class="py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
    <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-extrabold">🔒 Contenido exclusivo para miembros</h2>
        <p class="mt-5 text-white/80 text-lg">Accedé a programas avanzados según tu nivel de membresía.</p>
        <ButtonLink tipo="inverse" href="/membresias" class="mt-8">Ver Membresías</ButtonLink>
    </div>
</div>

<Section class="py-16 bg-whiteBGLite">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-8">
            <h2 class="text-4xl font-bold text-primary">Capacitaciones para Miembros</h2>
        </div>

        <div class="mb-10 text-center">
            <label class="block text-lg font-semibold text-primary mb-4">Buscar capacitaciones exclusivas</label>
            <div class="relative max-w-2xl mx-auto">
                <input 
                    type="text"
                    bind:value={textBusqueda}
                    oninput={buscar}
                    placeholder="Buscar por título, categoría o docente..."
                    class="w-full px-6 py-4 bg-secondary text-white rounded-xl shadow-md outline-none placeholder-white/50"
                />
            </div>
        </div>

        <p class="text-center text-gray-600 mb-10">
            {capacitaciones.length} {capacitaciones.length === 1 ? 'resultado' : 'resultados'}
        </p>

        <div class="grid gap-10 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
            {#each capacitaciones as cap}
                <CardCapacitacion {cap} />
            {/each}
        </div>
    </div>
</Section>