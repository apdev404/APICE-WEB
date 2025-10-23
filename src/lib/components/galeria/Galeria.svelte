<script lang="ts">
  import { onMount } from 'svelte';
  
  let current: number = 0;
  let interval: NodeJS.Timeout | undefined;
  
  // Tus imágenes - cambia estas rutas
  export let slides: string[] = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg', 
    '/images/hero-3.jpg'
  ];
  
  export let autoplay: boolean = true;
  export let delay: number = 5000;
  
  onMount(() => {
    if (autoplay) {
      interval = setInterval(next, delay);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  });
  
  function next(): void {
    current = (current + 1) % slides.length;
  }
  
  function prev(): void {
    current = (current - 1 + slides.length) % slides.length;
  }
  
  function goTo(index: number): void {
    current = index;
    if (autoplay && interval) {
      clearInterval(interval);
      interval = setInterval(next, delay);
    }
  }
</script>

<div class="relative w-full h-96 overflow-hidden">
  <!-- Slides -->
  {#each slides as slide, i}
    <div
      class="absolute inset-0 transition-opacity duration-700 ease-in-out"
      class:opacity-100={current === i}
      class:opacity-0={current !== i}
    >
      <img 
        src={slide} 
        alt="Slide {i + 1}" 
        class="w-full h-full object-cover"
      />
    </div>
  {/each}
  
  <!-- Botones de navegación -->
  <button 
    on:click={prev}
    class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
    aria-label="Slide anterior"
  >
    ←
  </button>
  
  <button 
    on:click={next}
    class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
    aria-label="Slide siguiente"
  >
    →
  </button>
  
  <!-- Indicadores -->
  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {#each slides as _, i}
      <button
        on:click={() => goTo(i)}
        class="w-3 h-3 rounded-full transition-all"
        class:bg-white={current === i}
        aria-label="Ir al slide {i + 1}"
      ></button>
    {/each}
  </div>
  <div class="absolute inset-0 bg-[#06171E]/20 mix-blend-soft-light"></div>

</div>