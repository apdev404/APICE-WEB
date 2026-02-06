<script lang="ts">
  let {
    tipo = "primary",
    href = null,
    onClick = null,
    class: className = ""
  } = $props();

  // Tipo específico para 'tipo'
  type TipoBoton = "primary" | "secondary" | "inverse";

  // Asegurar el tipo
  const tipoSeguro: TipoBoton = (tipo === "primary" || tipo === "secondary" || tipo === "inverse") 
    ? tipo 
    : "primary";

  // Estilos con tipo seguro
  const estilos: Record<TipoBoton, string> = {
    primary: 'bg-secondary hover:bg-orange-600 text-whiteColor',
    secondary: 'border-2 border-greenAP text-greenAP hover:bg-greenAP hover:text-whiteColor',
    inverse: 'bg-whiteColor text-secondary border-2 border-secondary hover:bg-secondary hover:text-whiteColor'
  };
</script>

{#if href}
  <a
    href={href}
    class={`inline-block text-center font-semibold py-3 px-8 rounded-lg transition-colors ${className} ${estilos[tipoSeguro]}`}
  >
    <slot /> <!-- Mantener slot si no usas Svelte 5 -->
  </a>
{:else}
  <button
    on:click={onClick} 
    class={`inline-block text-center font-semibold py-3 px-8 rounded-lg transition-colors ${className} ${estilos[tipoSeguro]}`}
  >
    <slot /> <!-- Mantener slot si no usas Svelte 5 -->
  </button>
{/if}