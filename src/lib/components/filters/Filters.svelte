<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { type SelectOption } from "$lib/utils/filters.mapper";

  let { filtros, titleFilter }: { filtros: SelectOption[], titleFilter: string } = $props();

  const dispatch = createEventDispatcher();

  let value: string = '';

  function handleChange() {
    dispatch("change", value);
  }
</script>

<div class="flex justify-center my-6">
  <select
    bind:value={value}
    on:change={handleChange}
    class="select bg-primary text-whiteColor border border-secondary 
           rounded-lg px-4 py-2 
           focus:outline-none focus:ring-2 focus:ring-secondary
           min-w-[220px]"
  >
    <option value="">{titleFilter}</option>

    {#each filtros as filtro}
      <option
        value={filtro.value}
        class="bg-primary text-whiteColor"
      >
        {filtro.label}
      </option>
    {/each}
  </select>
</div>
