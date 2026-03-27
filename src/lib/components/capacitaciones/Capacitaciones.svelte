<script lang="ts">
    import Section from "$lib/components/section/Section.svelte";
    import CardCapacitacion from "$lib/components/cards/CardCapacitacion.svelte";
    import SearchBundle from "../searchBundle/SearchBundle.svelte";
    import type { Capacitacion } from "$lib/domain/capacitacion";
    import { categoriasOptions } from "$lib/domain/categorias";
    import { Modalidades } from "$lib/domain/auxiliares";

    interface CapaSearchParams {
        text: string;
        tipo: 'libres' | 'miembros';
        categoriaId: string;
        modalidad: string;   
    }

    interface BundleParams {
        text: string;
        [key: string]: string;
    }

    let { capacitaciones = [], onBusca } = $props<{ 
        capacitaciones: Capacitacion[],
        onBusca: (filtros: CapaSearchParams) => void 
    }>();

    const configFiltros = [
        { id: 'categoriaId', label: 'Tema', opciones: categoriasOptions },
        { 
          id: 'modalidad', 
          label: 'Modalidad', 
          opciones: [
            { value: Modalidades.Virtual , label: 'Virtual' },
            { value: Modalidades.Presencial , label: 'Presencial' },
            { value: Modalidades.Hibrido , label: 'Híbrido' }
          ]
        }
    ];

    function handleSearch(params: BundleParams): void {
        onBusca({ 
            ...params, 
            tipo: 'libres' 
        });
    }
</script>

<Section class="bg-primary text-white py-20 text-center relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 px-6">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight font-heading">Capacitaciones Disponibles</h1>
        <p class="mt-4 text-white/80 text-lg max-w-2xl mx-auto font-sans">
            Programas de formación dictados por expertos en relaciones internacionales.
        </p>
    </div>
</Section>

<Section class="py-14 bg-whiteBGLite">
    <div class="max-w-6xl mx-auto px-6">
        <div class="relative -mt-24 mb-16 z-20">
            <SearchBundle 
                placeholder="Buscar por título, categoría o docente..."
                filtrosConfig={configFiltros}
                totalResultados={capacitaciones.length}
                onSearch={handleSearch}
            />
        </div>

        {#if capacitaciones.length > 0}
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {#each capacitaciones as cap (cap.id)}
                    <div class="hover:-translate-y-2 transition-transform duration-300">
                        <CardCapacitacion {cap} />
                    </div>
                {/each}
            </div>
        {:else}
            <div class="flex flex-col items-center justify-center py-20 bg-whiteColor/50 rounded-3xl border-2 border-dashed border-gray-200">
                <i class="ph ph-book-open text-4xl text-gray-300 mb-4"></i>
                <p class="text-gray-500 font-medium">No se encontraron capacitaciones libres.</p>
            </div>
        {/if}
    </div>
</Section>