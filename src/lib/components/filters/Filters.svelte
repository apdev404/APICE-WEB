<script lang="ts">
  import { type SelectOption } from "$lib/utils/filters.mapper";

  let { filtros, titleFilter, onchange }: { 
    filtros: SelectOption[], 
    titleFilter: string,
    onchange: (value: string) => void 
  } = $props();

  let value: string = $state(''); 
  function handleChange() {
    onchange(value);
  }
</script>

<div class="flex justify-center my-6">
  <select
    bind:value={value}
    onchange={handleChange} 
    class="select bg-primary text-whiteColor border border-secondary 
           rounded-lg px-4 py-2 
           focus:outline-none focus:ring-2 focus:ring-secondary
           min-w-[220px]"
  >
    <option value="">{titleFilter}</option>

    {#each filtros as filtro (filtro.value)}
      <option
        value={filtro.value}
        class="bg-primary text-whiteColor"
      >
        {filtro.label}
      </option>
    {/each}
  </select>
</div>