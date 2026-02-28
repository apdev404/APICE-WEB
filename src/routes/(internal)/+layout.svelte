<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    
    let { children } = $props();

    let logueado = false

    onMount(()=>{
        logueado = localStorage.getItem('logeado') === 'true'
    });

    const puedeAcceder = $derived(logueado)

    $effect(()=>{
        if(!puedeAcceder){
            goto('/internal/admin-apice-panel/login')
        }
    })
</script>

{@render children?.()}