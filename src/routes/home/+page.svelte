<script lang="ts">
    import Galeria from "$lib/components/galeria/Galeria.svelte"
    import Section from "$lib/components/section/Section.svelte"
    import Cards from "$lib/components/cards/cards.svelte"
    import ButtonLink from "$lib/components/buttons/ButtonLink.svelte";


    const servicios = [
        {
        icono: "ph ph-globe-hemisphere-west",
        titulo: "Comercio Exterior",
        texto:
            "Asesoramiento experto para instituciones, empresas y gobiernos en temas de geopolítica, diplomacia y análisis internacional.",
        link: "comExt"
        },
        {
        icono: "ph ph-chalkboard-teacher",
        titulo: "Diplomacia Corporativa",
        texto:
            "Programas formativos personalizados, adaptados a las necesidades de cada equipo o institución.",
        link: "dipCorpo"
        },
        {
        icono: "ph ph-handshake",
        titulo: "Relaciones internacionales",
        texto:
            "Entrenamiento y acompañamiento en procesos de negociación multilateral y diplomática.",
        link: "relIntern"
        },
        {
        icono: "ph ph-briefcase",
        titulo: "Analisis geopolitico",
        texto:
            "Acompañamiento integral en estrategias de exportación, competitividad y acuerdos comerciales.",
        link: "anGeo"
        },
        {
        icono: "ph ph-briefcase",
        titulo: "Capacitaciones y Formacion Empresarial",
        texto:
            "Accede a nuestras capacitaciones con nuestras membresias",
        link: "capFormEmpre"
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
            Impulsamos a las empresas a operar internacionalmente con estrategias personalizadas de Comercio Exterior, alianzas globales y gestión eficiente de operaciones        </p>
        <div class="w-20 h-1 bg-secondary mx-auto mt-6"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each servicios as servicio}
            <div class="bg-whiteColor rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-whiteBGLite group">
                <div class="w-12 h-12 bg-greenLight rounded-lg flex items-center justify-center mb-4 group-hover:bg-greenAP transition-colors">
                        <i class={"text-whiteColor text-3xl " + servicio.icono}></i>
                </div>
                <h3 class="font-heading text-xl font-semibold text-primary mb-3">{servicio.titulo}</h3>
                <p class="text-primaryFontColor mb-4 font-alternative leading-relaxed">
                    {servicio.texto}
                </p>
                <a href={"/servicios#"+servicio.link} class="text-secondary hover:text-greenAP font-medium text-sm inline-flex items-center group/link">
                    Saber más
                    <svg class="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        {/each}
    </div>
</Section>

<Section class="py-20 lg:py-28 bg-primary text-whiteColor">
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
                <ButtonLink tipo="primary" href="/servicios">
                    Nuestros Servicios
                </ButtonLink>

                <ButtonLink tipo="outline" href="/servicios#consultores">
                    Contactar Consultor
                </ButtonLink>
            </div>
        </div>
        <div class="bg-primary rounded-2xl p-8 text-whiteColor">
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

