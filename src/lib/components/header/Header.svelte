<script lang="ts">
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

<header class="bg-white border-b border-gray-200">
    <div class="px-4 h-full">
        <!-- Navbar Principal -->
        <nav class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="text-xl font-bold text-gray-800">APICE</div>

            <!-- Botón Hamburguesa -->
            <button 
                class="p-2 text-gray-700 hover:text-blue-600 transition duration-200"
                on:click={() => isMenuOpen = !isMenuOpen}
            >
                <i class="{isMenuOpen ? 'ph ph-x' : 'ph ph-list'} text-2xl"></i>
            </button>
        </nav>

        <!-- Menú Desplegable Mobile -->
        {#if isMenuOpen}
            <div class="flex flex-col justify-center pb-4 h-full">
                {#each listaMenu as elemento (elemento.nombreURL)}
                    <a 
                        href={elemento.nombreURL}
                        class="flex justify-center items-center py-3 px-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition duration-200"
                        on:click={() => isMenuOpen = false}
                    >
                        <i class="{elemento.logoMobile} mr-3 text-lg"></i>
                        <span>{elemento.nombreMenu}</span>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</header>