<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Plus, Minus } from 'lucide-svelte';

	let { title, date, summary, details, x, y, alignment = 'left', type = 'work' } = $props();
	let expanded = $state(false);
</script>

<!-- The Milestone Container -->
<div 
	class="absolute z-10 flex items-center transition-all duration-700"
	style="top: {y}px; left: {x}%; transform: translate(-6px, -50%);"
>
	<!-- The Dot (Now an empty circle with a gray rim) -->
	<div class="relative flex items-center justify-center">
		<div class="h-3 w-3 rounded-full border border-content/30 bg-canvas shadow-[0_0_0_2px_var(--bg)]"></div>
	</div>

	<!-- The Content Area (Always to the right of the dot) -->
	<div class="ml-8 flex flex-col w-[300px]">
		<button
			onclick={() => (expanded = !expanded)}
			class="group flex w-full flex-col items-start text-left cursor-pointer transition-opacity hover:opacity-70 text-content"
		>
			<span class="mb-1 text-[11px] uppercase tracking-[0.4em] opacity-40">{date}</span>
			<h2 class="mb-1 text-base tracking-widest uppercase leading-tight">{title}</h2>
			<p class="text-xs leading-relaxed opacity-60">
				{summary}
			</p>
			
			<div class="mt-3 flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle">
				{#if expanded}
					<Minus size={8} strokeWidth={1} />
				{:else}
					<Plus size={8} strokeWidth={1} />
				{/if}
			</div>
		</button>

		{#if expanded}
			<div
				transition:slide={{ duration: 400 }}
				class="mt-3 w-full overflow-hidden border-t border-border-subtle pt-3 text-content"
			>
				<div class="text-[10px] leading-loose opacity-80 uppercase tracking-widest">
					{@html details}
				</div>
			</div>
		{/if}
	</div>
</div>
