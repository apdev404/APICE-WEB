<script lang="ts">
	import { toasts } from './toastStore'
	import { fade, fly } from 'svelte/transition'
	import "./ToastContainer.css"
</script>

<div class="toast-container">
	{#each $toasts as toast (toast.id)}
		<div
			class="toast {toast.type}"
			in:fly={{ x: 200, y: -10, duration: 200 }}
			out:fade={{ duration: 200 }}
		>
			{toast.message}
		</div>
	{/each}
</div>