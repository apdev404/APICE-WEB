<script lang="ts">
  import { onMount } from 'svelte';
  import Swiper from 'swiper';
  import { Autoplay, EffectFade } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/effect-fade'; // ✅ SOLO ESTE

  let swiperEl: HTMLElement | null = null;
  const { images } = $props();

  onMount(() => {
    if (!swiperEl) return;
    
    new Swiper(swiperEl, {
      modules: [Autoplay, EffectFade],
      effect: 'fade',
      loop: true,
      autoplay: { delay: 3000 },
      speed: 1000,
    });
  });
</script>

<div class="swiper w-full h-96" bind:this={swiperEl}>
  <div class="swiper-wrapper">
    {#each images as image}
      <div class="swiper-slide">
        <img src={image} class="w-full h-full object-cover" />
      </div>
    {/each}
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