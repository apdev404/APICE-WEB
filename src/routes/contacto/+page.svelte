<script lang="ts">
    import Formularios from "$lib/components/formularios/Formularios.svelte";
</script>


<div>
    <!-- Redes sociales con iconos SVG -->
<div class="text-center mb-8 mx-8">
    <h2 class="text-2xl font-heading font-semibold text-whiteColor mb-8">
        Seguinos en nuestras redes
    </h2>
    
    <div class="flex justify-center space-x-6">
    <!-- Facebook - Con tus colores -->
    <a href="#" class="group">
        <div class="w-14 h-14 bg-whiteColor flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-105 shadow-sm">
            <i class="ph-thin ph-facebook-logo text-4xl text-primary group-hover:text-whiteColor"></i>
        </div>
    </a>
    
    <!-- Instagram - Con tus colores -->
    <a href="#" class="group">
        <div class="w-14 h-14 bg-whiteColor flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-105 shadow-sm">
            <i class="ph-thin ph-instagram-logo text-4xl text-primary group-hover:text-whiteColor"></i>
        </div>
    </a>

    <!-- LinkedIn - Con tus colores -->
    <a href="#" class="group">
        <div class="w-14 h-14 bg-whiteColor flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-105 shadow-sm">
            <i class="ph-thin ph-linkedin-logo text-4xl text-primary group-hover:text-whiteColor"></i>
        </div>
    </a>
</div>
    
    <p class="text-whiteColor/60 mt-6 text-sm">
        Síguenos para estar al día con nuestras últimas novedades
    </p>
</div>
    
    <Formularios
        class="my-12"
        titulo="Contacto"
        descripcion="Dejanos tu consulta y te responderemos lo antes posible."
    />
</div>