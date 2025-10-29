<script>
    // Datos reutilizables para las cards
    const misionVisionValores = [
        {
            icon: `M13 10V3L4 14h7v7l9-11h-7z`,
            title: "Nuestra Misión",
            description: "Asesorar a organizaciones en la navegación de complejidades globales, creando puentes entre culturas, mercados y gobiernos para impulsar el crecimiento sostenible.",
            type: "text"
        },
        {
            icon: `M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z`,
            title: "Nuestra Visión",
            description: "Ser el referente estratégico en consultoría internacional para operaciones globales, reconocidos por nuestra excelencia e integridad.",
            type: "text"
        },
        {
            icon: `M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`,
            title: "Nuestros Valores",
            items: [
                "Excelencia Analítica",
                "Discreción Absoluta", 
                "Integridad Profesional",
                "Expertise Local-Global"
            ],
            type: "list"
        }
    ];

    const ventajas = [
        {
            number: "1",
            title: "Experiencia Multisectorial",
            description: "Hemos asesorado a gobiernos, corporaciones Fortune 500 y startups en su expansión internacional."
        },
        {
            number: "2", 
            title: "Red Global",
            description: "Presencia en 15+ países con contactos estratégicos en organismos internacionales clave."
        },
        {
            number: "3",
            title: "Metodología Propia", 
            description: "Framework probado de análisis geopolítico y gestión de riesgo regulatorio."
        },
        {
            number: "4",
            title: "Equipo Multilingüe",
            description: "Capacidad de operación en 8 idiomas con comprensión cultural profunda."
        }
    ];

    const equipo = [
        {
            name: "Dr. Alejandro Mendoza",
            position: "Socio Fundador",
            description: "Ex-embajador en ONU, PhD en Relaciones Internacionales, 20+ años en diplomacia.",
            badges: ["Harvard University", "Ex-Embajador"]
        },
        {
            name: "Dra. María Fernández",
            position: "Directora de Comercio Exterior", 
            description: "Especialista en negociaciones comerciales y análisis de mercados emergentes.",
            badges: ["London School of Economics", "OMC Experta"]
        },
        {
            name: "Carlos Rodríguez",
            position: "Director de Estrategia Geopolítica",
            description: "Analista senior de riesgo político con experiencia en inteligencia de mercados.",
            badges: ["Georgetown University", "Análisis de Riesgo"]
        }
    ];

    const estadisticas = [
        { number: "50+", label: "Proyectos Internacionales" },
        { number: "15+", label: "Países de Operación" },
        { number: "98%", label: "Clientes Satisfechos" },
        { number: "12", label: "Años de Experiencia" }
    ];
</script>

<div class="min-h-screen bg-whiteColor">
    <!-- Hero Section -->
    <section class="relative bg-primary py-20 lg:py-28">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="max-w-4xl mx-auto text-center text-whiteColor">
                <h1 class="font-heading text-4xl lg:text-6xl font-bold mb-6">
                    Liderando la Estrategia Global
                </h1>
                <p class="text-xl lg:text-2xl text-whiteColor/90 mb-8 font-alternative">
                    Consultoría especializada en diplomacia corporativa, comercio exterior y relaciones internacionales
                </p>
                <div class="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
        </div>
    </section>

    <!-- Misión, Visión, Valores -->
    <section class="py-16 lg:py-24 bg-whiteBGLite">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {#each misionVisionValores as item}
                    <div class="text-center p-8 bg-whiteColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-16 h-16 bg-greenLight rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-whiteColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {#if Array.isArray(item.icon)}
                                    {#each item.icon as path}
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path}></path>
                                    {/each}
                                {:else}
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon}></path>
                                {/if}
                            </svg>
                        </div>
                        <h3 class="font-heading text-2xl font-semibold text-primary mb-4">{item.title}</h3>
                        
                        {#if item.type === 'list'}
                            <ul class="text-primaryFontColor font-alternative text-left space-y-2">
                                {#each item.items as listItem}
                                    <li class="flex items-center">
                                        <div class="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                        {listItem}
                                    </li>
                                {/each}
                            </ul>
                        {:else}
                            <p class="text-primaryFontColor font-alternative">
                                {item.description}
                            </p>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Nuestra Ventaja Diferenciadora -->
    <section class="py-16 lg:py-24 bg-whiteColor">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                    Nuestra Ventaja Estratégica
                </h2>
                <div class="w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="space-y-6">
                        {#each ventajas as ventaja}
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-greenAP rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-whiteColor font-bold">{ventaja.number}</span>
                                </div>
                                <div>
                                    <h3 class="font-heading text-xl font-semibold text-primary mb-2">{ventaja.title}</h3>
                                    <p class="text-primaryFontColor font-alternative">
                                        {ventaja.description}
                                    </p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <div class="bg-greenLight rounded-2xl p-8 text-whiteColor">
                    <h3 class="font-heading text-2xl font-semibold mb-6">Nuestro Impacto</h3>
                    <div class="grid grid-cols-2 gap-6">
                        {#each estadisticas as stat}
                            <div class="text-center">
                                <div class="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                                <div class="text-whiteColor/80">{stat.label}</div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- El Equipo -->
    <section class="py-16 lg:py-24 bg-whiteBGLite">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                    Nuestro Equipo Directivo
                </h2>
                <p class="text-xl text-primaryFontColor/80 max-w-2xl mx-auto font-alternative">
                    Líderes con trayectoria comprobada en relaciones internacionales y estrategia global
                </p>
                <div class="w-20 h-1 bg-secondary mx-auto mt-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each equipo as miembro}
                    <div class="bg-whiteColor rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                        <div class="h-48 bg-greenLight flex items-center justify-center">
                            <svg class="w-20 h-20 text-whiteColor" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="p-6">
                            <h3 class="font-heading text-xl font-semibold text-primary mb-1">{miembro.name}</h3>
                            <p class="text-secondary font-medium mb-3">{miembro.position}</p>
                            <p class="text-primaryFontColor text-sm mb-4 font-alternative">
                                {miembro.description}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                {#each miembro.badges as badge}
                                    <span class="bg-greenLight/10 text-greenLight text-xs px-3 py-1 rounded-full">{badge}</span>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 lg:py-20 bg-primary">
        <div class="container mx-auto px-4 lg:px-8 text-center">
            <h2 class="font-heading text-3xl lg:text-4xl font-bold text-whiteColor mb-6">
                ¿Listo para Expandir su Alcance Global?
            </h2>
            <p class="text-xl text-whiteColor/80 mb-8 max-w-2xl mx-auto font-alternative">
                Conéctese con nuestro equipo para una consultoría estratégica personalizada
            </p>
            <button class="bg-secondary hover:bg-secondary/90 text-whiteColor font-semibold py-3 px-8 rounded-lg transition-colors font-alternative">
                Solicitar Consultoría Inicial
            </button>
        </div>
    </section>
</div>