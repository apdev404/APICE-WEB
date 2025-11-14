<script lang="ts">
    import Galeria from "$lib/components/galeria/Galeria.svelte"
    import Section from "$lib/components/section/Section.svelte"
    import Cards from "$lib/components/cards/cards.svelte"

    const serviciosDestacados = [
        {
            icon: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
            title: "Diplomacia Corporativa",
            description: "Gestión estratégica de relaciones con gobiernos y organismos internacionales.",
            link: "/servicios/diplomacia"
        },
        {
            icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z",
            title: "Comercio Exterior",
            description: "Asesoramiento integral en operaciones de importación y exportación.",
            link: "/servicios/comercio"
        },
        {
            icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
            title: "Relaciones Internacionales",
            description: "Desarrollo de estrategias para la expansión global de su organización.",
            link: "/servicios/relaciones-internacionales"
        },
        {
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            title: "Análisis Geopolítico",
            description: "Evaluación de riesgos y oportunidades en escenarios internacionales.",
            link: "/servicios/analisis-geopolitico"
        }
    ];

    const estadisticas = [
        { number: "50+", label: "Proyectos Internacionales" },
        { number: "15+", label: "Países de Operación" },
        { number: "12", label: "Años de Experiencia" },
        { number: "98%", label: "Clientes Satisfechos" }
    ];

    const publicaciones = [
        {
            title: "Tendencias en Comercio Exterior 2024",
            excerpt: "Análisis de las nuevas regulaciones y oportunidades en mercados emergentes.",
            category: "Comercio Exterior",
            date: "15 Nov 2024",
            link: "/blog/tendencias-comercio-2024"
        },
        {
            title: "Diplomacia Corporativa en América Latina",
            excerpt: "Estrategias efectivas para la gestión de relaciones gobierno-empresa.",
            category: "Diplomacia",
            date: "8 Nov 2024",
            link: "/blog/diplomacia-corporativa-latam"
        },
        {
            title: "Impacto Geopolítico en Cadenas de Suministro",
            excerpt: "Cómo adaptar su estrategia logística a los cambios globales.",
            category: "Análisis",
            date: "1 Nov 2024",
            link: "/blog/impacto-geopolitico-cadenas-suministro"
        }
    ];
</script>

<Galeria 
    images={[
        '/images/galery/img1.jpg',
        '/images/galery/img2.jpg',
        '/images/galery/img3.jpg',
    ]}
    autoplay={true}
    delay={4000}
>
    <div class="mb-10">
        <img 
            src="/images/logos/LOGO-NEGATIVO-APICE.png" 
            alt="APICE" 
            class="h-40 md:h-56 lg:h-64 w-auto mx-auto 
                   drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]
                   drop-shadow-[0_0_60px_rgba(0,0,0,0.6)]
                   filter brightness-110 contrast-110"
        />
    </div>
    
    <a 
        href="/about" 
        class="inline-block bg-secondary hover:bg-orange-600 text-whiteColor font-bold py-4 px-12  transition-all duration-300 text-lg "
    >
        Conocer más sobre nosotros
    </a>
</Galeria>

<Section class="py-20 lg:py-28 bg-whiteBGLite">
    <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Nuestros Servicios Especializados
        </h2>
        <p class="text-xl text-primaryFontColor/80 max-w-2xl mx-auto font-alternative">
            Soluciones integrales para la expansión y consolidación internacional de su organización
        </p>
        <div class="w-20 h-1 bg-secondary mx-auto mt-6"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each serviciosDestacados as servicio}
            <div class="bg-whiteColor rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-whiteBGLite group">
                <div class="w-12 h-12 bg-greenLight rounded-lg flex items-center justify-center mb-4 group-hover:bg-greenAP transition-colors">
                    <svg class="w-6 h-6 text-whiteColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={servicio.icon}></path>
                    </svg>
                </div>
                <h3 class="font-heading text-xl font-semibold text-primary mb-3">{servicio.title}</h3>
                <p class="text-primaryFontColor mb-4 font-alternative leading-relaxed">
                    {servicio.description}
                </p>
                <a href={servicio.link} class="text-secondary hover:text-greenAP font-medium text-sm inline-flex items-center group/link">
                    Saber más
                    <svg class="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        {/each}
    </div>
</Section>

<Section class="py-20 lg:py-28 bg-greenAP text-whiteColor">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {#each estadisticas as stat}
            <div class="space-y-2">
                <div class="text-3xl lg:text-4xl font-bold font-heading">{stat.number}</div>
                <div class="text-whiteColor/80 font-alternative">{stat.label}</div>
            </div>
        {/each}
    </div>
</Section>

<Section class="py-20 lg:py-28 bg-whiteColor">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 class="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Liderazgo en Consultoría Internacional
            </h2>
            <p class="text-lg text-primaryFontColor mb-6 font-alternative leading-relaxed">
                En <span class="font-semibold text-greenAP">APICE</span> combinamos expertise local con perspectiva global para ofrecer soluciones estratégicas que trascienden fronteras. 
            </p>
            <p class="text-lg text-primaryFontColor mb-8 font-alternative leading-relaxed">
                Nuestro equipo de profesionales con trayectoria en organismos internacionales, gobiernos y corporaciones multinacionales garantiza un abordaje integral y efectivo.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="/servicios" class="bg-secondary hover:bg-orange-600 text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors text-center">
                    Nuestros Servicios
                </a>
                <a href="/consultores" class="border-2 border-greenAP text-greenAP hover:bg-greenAP hover:text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors text-center">
                    Contactar Consultor
                </a>
            </div>
        </div>
        <div class="bg-greenLight rounded-2xl p-8 text-whiteColor">
            <h3 class="font-heading text-2xl font-semibold mb-6">¿Por qué elegirnos?</h3>
            <ul class="space-y-4 font-alternative">
                <li class="flex items-start">
                    <svg class="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Experiencia multisectorial comprobada</span>
                </li>
                <li class="flex items-start">
                    <svg class="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Red global de contactos estratégicos</span>
                </li>
                <li class="flex items-start">
                    <svg class="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Metodologías propias validadas internacionalmente</span>
                </li>
                <li class="flex items-start">
                    <svg class="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Enfoque personalizado y discreto</span>
                </li>
            </ul>
        </div>
    </div>
</Section>

<Section class="py-20 lg:py-28 bg-whiteBGLite">
    <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Análisis y Perspectivas
        </h2>
        <p class="text-xl text-primaryFontColor/80 max-w-2xl mx-auto font-alternative">
            Últimas publicaciones sobre tendencias globales y análisis estratégicos
        </p>
        <div class="w-20 h-1 bg-secondary mx-auto mt-6"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each publicaciones as publicacion}
            <div class="bg-whiteColor rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-3">
                        <span class="bg-greenLight/10 text-greenLight text-xs px-3 py-1 rounded-full">{publicacion.category}</span>
                        <span class="text-primaryFontColor/60 text-sm">{publicacion.date}</span>
                    </div>
                    <h3 class="font-heading text-xl font-semibold text-primary mb-3">{publicacion.title}</h3>
                    <p class="text-primaryFontColor mb-4 font-alternative leading-relaxed">
                        {publicacion.excerpt}
                    </p>
                    <a href={publicacion.link} class="text-secondary hover:text-greenAP font-medium text-sm inline-flex items-center">
                        Leer análisis
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        {/each}
    </div>

    <div class="text-center mt-12">
        <a href="/capacitaciones" class="border-2 border-greenAP text-greenAP hover:bg-greenAP hover:text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center">
            Ver todas las publicaciones
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </a>
    </div>
</Section>

<Section class="py-20 lg:py-28 bg-primary text-primary bg-whiteBGLite">
    <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6">
            ¿Listo para Expandir su Alcance Global?
        </h2>
        <p class="text-xl text-primary/80 mb-8 font-alternative">
            Agenda una consultoría inicial sin costo para evaluar las oportunidades internacionales de su organización
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" class="bg-secondary hover:bg-orange-600 text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors text-center">
                Solicitar Consultoría
            </a>
            <a href="/servicios" class="border-2 border-primary text-primary hover:bg-primary hover:text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors text-center">
                Conocer Servicios
            </a>
        </div>
    </div>
</Section>

