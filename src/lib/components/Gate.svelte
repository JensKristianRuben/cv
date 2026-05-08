<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let { onunlock } = $props();
	let solved = $state(false);
	let dragging = $state(false);
	let pos = $state({ x: 0, y: 0 });
	let offset = { x: 0, y: 0 };

	onMount(() => {
		pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 - 50 };
	});

	function handleMouseDown(e: MouseEvent | TouchEvent) {
		dragging = true;
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
		offset = {
			x: clientX - pos.x,
			y: clientY - pos.y
		};
	}

	function handleMouseMove(e: MouseEvent | TouchEvent) {
		if (!dragging) return;
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
		pos = {
			x: clientX - offset.x,
			y: clientY - offset.y
		};

		// Check proximity to target
		const targetX = window.innerWidth / 2;
		const targetY = window.innerHeight / 2 + 100;
		const dist = Math.sqrt(Math.pow(pos.x - targetX, 2) + Math.pow(pos.y - targetY, 2));
		
		if (dist < 20) {
			solved = true;
			dragging = false;
			setTimeout(() => onunlock?.(), 800);
		}
	}

	function handleMouseUp() {
		dragging = false;
	}
</script>

<svelte:window 
	onmousemove={handleMouseMove} 
	ontouchmove={handleMouseMove} 
	onmouseup={handleMouseUp} 
	ontouchend={handleMouseUp} 
/>

{#if !solved}
	<div
		class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-canvas"
		transition:fade={{ duration: 1000 }}
	>
		<div class="mb-24 text-center">
			<h1 class="mb-4 text-sm uppercase tracking-[0.5em] text-content">Entrance</h1>
			<p class="text-[10px] opacity-40 uppercase tracking-widest text-content">Connect the void</p>
		</div>

		<!-- Target -->
		<div
			class="absolute h-12 w-12 rounded-full border border-content/10"
			style="left: 50%; top: calc(50% + 100px); transform: translate(-50%, -50%);"
		></div>

		<!-- Draggable -->
		<button
			class="absolute h-12 w-12 cursor-grab rounded-full border border-content bg-canvas active:cursor-grabbing"
			style="left: {pos.x}px; top: {pos.y}px; transform: translate(-50%, -50%);"
			onmousedown={handleMouseDown}
			ontouchstart={handleMouseDown}
			aria-label="Drag to unlock"
		></button>
	</div>
{/if}

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
