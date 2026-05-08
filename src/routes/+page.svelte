<script lang="ts">
	import Gate from '$lib/components/Gate.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let showGate = $state(false);

	onMount(() => {
		const isUnlocked = localStorage.getItem('site_unlocked') === 'true';
		if (isUnlocked) {
			goto('/cv');
		} else {
			showGate = true;
		}
	});

	function handleUnlock() {
		localStorage.setItem('site_unlocked', 'true');
		goto('/cv');
	}
</script>

{#if showGate}
	<Gate onunlock={handleUnlock} />
{/if}

<div class="fixed inset-0 bg-white -z-10"></div>
