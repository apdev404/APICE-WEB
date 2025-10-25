<script lang="ts">
    import Galeria from "$lib/components/galeria/Galeria.svelte"
    import Section from "$lib/components/section/Section.svelte"
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
    <!-- Logo MÁS GRANDE con múltiples efectos de sombra -->
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
    

    
    <!-- Botón con sombra y hover -->
    <a 
        href="/about" 
        class="inline-block bg-secondary hover:bg-orange-600 text-whiteColor font-bold py-4 px-12  transition-all duration-300 text-lg "
    >
        Conocer más sobre nosotros
    </a>
</Galeria>

<Section class="text-center">
    <h1 class="text-4xl font-heading font-bold text-primary mb-6">
        Bienvenidos a APICE
    </h1>
    <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Somos una institución líder en el sector, dedicada a brindar soluciones innovadoras 
        y educación de calidad para el desarrollo profesional y personal.
    </p>
</Section>