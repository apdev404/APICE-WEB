<script>
  let {
    tipo = "primary",
    href = null,        // si viene, se comporta como link
    onClick = null,     // función opcional
    class: className = ""
  } = $props();
</script>

{#if href}
  <a
    href={href}
    class={`
      inline-block text-center font-semibold py-3 px-8 rounded-lg transition-colors ${className}
      ${tipo === 'primary'
        ? 'bg-secondary hover:bg-orange-600 text-whiteColor'
        : 'border-2 border-greenAP text-greenAP hover:bg-greenAP hover:text-whiteColor'}
    `}
  >
    <slot />
  </a>
{:else}
  <button
    on:click={onClick}
    class={`
      inline-block text-center font-semibold py-3 px-8 rounded-lg transition-colors ${className}
      ${tipo === 'primary'
        ? 'bg-secondary hover:bg-orange-600 text-whiteColor'
        : 'border-2 border-greenAP text-greenAP hover:bg-greenAP hover:text-whiteColor'}
    `}
  >
    <slot />
  </button>
{/if}
