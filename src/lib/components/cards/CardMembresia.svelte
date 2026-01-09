<script>
  const {
    nombre,
    precio,
    tag = "",
    icono,
    publico,
    beneficios = [],
    destacado = false
  } = $props();
</script>

<div
  class="card bg-white shadow-lg border border-gray-200 transition-transform
         {destacado ? 'scale-105 ring-2 ring-secondary' : ''}"
>
  <div class="card-body">

    {#if tag}
      <span class="badge badge-secondary badge-sm mb-2">{tag}</span>
    {/if}

    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold text-primary flex items-center gap-2">
        <i class={"text-secondary text-2xl " + icono}></i>
        {nombre}
      </h2>
      <span class="text-xl font-semibold">{precio}/mes</span>
    </div>

    <p class="text-sm text-gray-500 mt-2">
      {publico}
    </p>

    <ul class="mt-6 flex flex-col gap-3 text-sm">
      {#each beneficios as b}
        <li class="flex items-center gap-2 {b.activo ? '' : 'opacity-40'}">
          <i class="ph ph-check-circle text-success"></i>
          <span class="{b.activo ? '' : 'line-through'}">{b.texto}</span>
        </li>
      {/each}
    </ul>

    <div class="mt-8">
      <button class="btn btn-primary btn-block">
        Elegir {nombre}
      </button>
    </div>

  </div>
</div>
