<script lang="ts">
  const linkedinUrl = "https://www.linkedin.com/in/agustin-ezequiel-pomponio-533ba1256/?skipRedirect=true";
</script>

<footer class="relative bg-primary text-whiteColor border-t border-white/5 overflow-hidden">
  <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
  <div class="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>

  <div class="container mx-auto px-6 py-20 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
      
      <div class="flex flex-col items-center md:items-start space-y-6">
        <img 
          src='/images/logos/LOGO-HZTAL-NEGATIVO-APICE.png'
          alt="Apice"
          class="h-11 w-auto filter brightness-0 invert transition-transform hover:scale-105"
        >
        <p class="opacity-80 font-sans text-sm md:text-base leading-relaxed text-center md:text-left max-w-sm">
          Posicionando a nuestros clientes a nivel local y los insertamos internacionalmente en los mercados y sociedades de Asia, América Latina, Europa y el resto del mundo.
        </p>
      </div>
      
      <div class="flex flex-col items-center">
        <h4 class="font-heading font-bold mb-8 text-secondary uppercase tracking-[0.4em] text-xs">Navegación</h4>
        <nav class="flex flex-col space-y-4 font-sans text-lg items-center">
          <a href="/home" class="group flex items-center hover:text-secondary transition-all opacity-70 hover:opacity-100">
            <span class="w-0 group-hover:w-3 h-[2px] bg-secondary mr-0 group-hover:mr-3 transition-all"></span>
            Inicio
          </a>
          <a href="/about" class="group flex items-center hover:text-secondary transition-all opacity-70 hover:opacity-100">
            <span class="w-0 group-hover:w-3 h-[2px] bg-secondary mr-0 group-hover:mr-3 transition-all"></span>
            ¿Quienes somos?
          </a>
          <a href="/servicios" class="group flex items-center hover:text-secondary transition-all opacity-70 hover:opacity-100">
            <span class="w-0 group-hover:w-3 h-[2px] bg-secondary mr-0 group-hover:mr-3 transition-all"></span>
            Servicios
          </a>
          <a href="/membresias" class="group flex items-center hover:text-secondary transition-all opacity-70 hover:opacity-100">
            <span class="w-0 group-hover:w-3 h-[2px] bg-secondary mr-0 group-hover:mr-3 transition-all"></span>
            Membresias
          </a>
          <a href="/contacto" class="group flex items-center hover:text-secondary transition-all opacity-70 hover:opacity-100">
            <span class="w-0 group-hover:w-3 h-[2px] bg-secondary mr-0 group-hover:mr-3 transition-all"></span>
            Contacto
          </a>
        </nav>
      </div>
      
      <div class="flex flex-col items-center md:items-end">
        <h4 class="font-heading font-bold mb-8 text-secondary uppercase tracking-[0.4em] text-xs">Síguenos</h4>
        <div class="flex space-x-5">
          <a href="#" class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-500 group shadow-lg hover:shadow-secondary/20">
            <i class="ph ph-facebook-logo text-3xl group-hover:text-white group-hover:scale-110 transition-all"></i>
          </a>
          <a href="#" class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-500 group shadow-lg hover:shadow-secondary/20">
            <i class="ph ph-linkedin-logo text-3xl group-hover:text-white group-hover:scale-110 transition-all"></i>
          </a>
          <a href="#" class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-500 group shadow-lg hover:shadow-secondary/20">
            <i class="ph ph-instagram-logo text-3xl group-hover:text-white group-hover:scale-110 transition-all"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="border-t border-white/5 bg-black/40 backdrop-blur-md">
    <div class="container mx-auto px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        
        <div class="flex justify-center md:justify-start">
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="group flex items-center gap-4 py-2 px-4 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all duration-500"
          >
            <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary group-hover:border-secondary transition-all">
               <i class="ph ph-brackets-angle text-secondary text-xl group-hover:text-white"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Fullstack Dev</span>
              <span class="text-sm font-bold text-white group-hover:text-secondary transition-colors">Agustin Pomponio</span>
            </div>
          </a>
        </div>

        <div class="text-[11px] uppercase tracking-[0.3em] opacity-40 font-sans text-center order-3 md:order-2">
          © 2026 APICE Strategic Consulting
        </div>

        <div class="hidden md:flex justify-end order-2 md:order-3">
          <span class="text-[10px] uppercase tracking-widest opacity-20">Global Excellence</span>
        </div>

      </div>
    </div>
  </div>
</footer>