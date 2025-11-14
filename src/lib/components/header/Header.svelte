<script lang="ts">
    import { page } from '$app/stores';

    let isMenuOpen = $state(false);

    type Menu = {
        nombreURL: string,
        nombreMenu: string,
        logoMobile: string,
    }

    let listaMenu: Menu[] = [
        {nombreURL: '/home', nombreMenu: 'INICIO', logoMobile: 'ph ph-house'},
        {nombreURL: '/about', nombreMenu: '¿QUIENES SOMOS?', logoMobile: 'ph ph-info'},
        {nombreURL: '/capacitaciones', nombreMenu: 'CAPACITACIONES', logoMobile: 'ph ph-book-open-text'},
        {nombreURL: '/consultores', nombreMenu: 'CONSULTORES', logoMobile: 'ph ph-chalkboard-teacher'},
        {nombreURL: '/servicios', nombreMenu: 'SERVICIOS', logoMobile: 'ph ph-briefcase'},
        {nombreURL: '/contacto', nombreMenu: 'CONTACTO', logoMobile: 'ph ph-chat'},
    ]
</script>

<header class="bg-primary px-4 sm:px-6 lg:px-10">
    <div class="h-full">
        <!-- Navbar Principal -->
        <nav class="flex justify-between items-center h-16 lg:flex">
            
            <!-- Logo DESKTOP (izquierda) -->
            <div class="flex items-center hidden lg:flex lg:px-2">
                <a href="/" class="group">
                    <img 
                        src="/images/logos/LOGO-HZTAL-POSITIVO-APICE.svg" 
                        alt="Apice Consultora"
                        class="h-8 w-auto lg:h-10 filter brightness-0 invert transition-all duration-300 group-hover:scale-105 group-hover:brightness-100"
                    >
                </a>
            </div>

            <!-- CONTENEDOR MOBILE CON GRID -->
            <div class="grid grid-cols-3 items-center w-full lg:hidden">
                
                <!-- Botón Hamburguesa (izquierda) -->
                <button 
                    aria-label="Menu button"
                    class="p-2 text-white hover:text-secondary transition-all duration-300 hover:bg-white/10 rounded-lg justify-self-start"
                    on:click={() => isMenuOpen = !isMenuOpen}
                >
                    <i class="{isMenuOpen ? 'ph ph-x' : 'ph ph-list'} text-2xl"></i>
                </button>

                <!-- LOGO MOBILE (centro) -->
                <div class="flex items-center justify-center">
                    <a href="/" class="group">
                        <img 
                            src="/images/logos/LOGO-NEGATIVO-APICE.png" 
                            alt="Apice Consultora"
                            class="h-12 w-auto transition-all duration-300 group-hover:scale-105" 
                        >
                    </a>
                </div>

                <!-- Espacio vacío (derecha) para balance -->
                <div class="w-10"></div>

            </div>

            <!-- Menú Desktop (derecha) -->
            <div class="font-heading flex flex-row justify-center items-center space-x-2 h-full hidden lg:flex">
                {#each listaMenu as elemento (elemento.nombreURL)}
                   <a 
                        href={elemento.nombreURL}
                        class="flex items-center py-2 px-2 hover:bg-secondary hover:text-primary transition-all duration-300 font-medium group relative overflow-hidden h-full {$page.url.pathname === elemento.nombreURL ? 'text-secondary' : 'text-whiteColor'}"
                    >
                        {elemento.nombreMenu}
                    </a>
                {/each}
            </div>

        </nav>

        <!-- Menú Mobile -->
        {#if isMenuOpen}
            <div class="lg:hidden flex flex-col bg-primary/95 backdrop-blur-sm rounded-lg mt-2 shadow-xl">
                {#each listaMenu as elemento (elemento.nombreURL)}
                    <a 
                        href={elemento.nombreURL}
                        class="flex items-center py-4 px-6 text-white hover:bg-secondary hover:text-primary transition-all duration-300 border-b border-white/10 last:border-b-0 group {$page.url.pathname === elemento.nombreURL ? 'bg-secondary text-primary' : ''}"
                        on:click={() => isMenuOpen = false}
                    >
                        <i class="{elemento.logoMobile} mr-4 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                        <span class="font-medium group-hover:translate-x-2 transition-transform duration-300">
                            {elemento.nombreMenu}
                        </span>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</header>