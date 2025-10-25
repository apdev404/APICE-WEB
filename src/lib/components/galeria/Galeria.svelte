<script lang="ts">
  import { onMount } from 'svelte';
  import Swiper from 'swiper';
  import { Autoplay, EffectFade } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import { Children } from 'react';

  let swiperEl: HTMLElement | null = null;
  const { images, children} = $props();

  onMount(() => {
    if (!swiperEl) return;
    
    new Swiper(swiperEl, {
      modules: [Autoplay, EffectFade],
      effect: 'fade',
      loop: true,
      autoplay: { delay: 5000 },
      speed: 1000,
    });
  });
</script>

<!-- CONTENEDOR PADRE -->
<div class="swiper relative w-full h-screen">

  <div class="absolute inset-0 z-0" bind:this={swiperEl}>
    <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none"></div>
    
    <div class="swiper-wrapper  ">
      {#each images as image}
        <div class="swiper-slide filter brightness-50">
          <img src={image} class="w-full h-full object-cover" />
        </div>
      {/each}
    </div>
    
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none"></div>
  </div>

  <!-- CONTENIDO FIJO ENCIMA -->
  <div class="relative z-20 flex items-center justify-center h-full">
    <div class="text-center text-whiteColor px-6 max-w-4xl mx-auto">
      {@render children()}
    </div>
  </div>
</div>

<style>
  .swiper-slide {
    opacity: 0;
  }
  .swiper-slide-active {
    opacity: 1;
  }
</style>