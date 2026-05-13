<script lang="ts">
	import { slide } from 'svelte/transition';

	let { title, date, summary, details, x, y, alignment = 'left', type = 'work', progress = 0, canvasHeight = 0 } = $props();
	
	// Exact same math as the line's growth
	let expanded = $derived((progress * canvasHeight) + 200 >= y);
</script>

<!-- The Milestone Container -->
<div 
	class="absolute z-10 flex items-center transition-all duration-700 w-full md:w-auto milestone-container"
	style="top: {y}px; --desktop-x: {x}%"
>
	<!-- Positioning Wrapper -->
	<div class="flex items-center">
		<!-- The Dot -->
		<div class="relative flex items-center justify-center">
			<div class="h-3 w-3 rounded-full border border-content/30 bg-canvas shadow-[0_0_0_2px_var(--bg)]"></div>
		</div>

		<!-- The Content Area -->
		<div class="ml-6 md:ml-8 flex flex-col w-[calc(100vw-80px)] md:w-[300px]">
			<div
				class="group flex w-full flex-col items-start text-left transition-opacity text-content"
			>
				<span class="mb-1 text-[11px] uppercase tracking-[0.4em] opacity-40">{date}</span>
				<h2 class="mb-1 text-lg tracking-widest uppercase leading-tight font-medium">{title}</h2>
				<p class="text-sm leading-relaxed opacity-70">
					{summary}
				</p>
			</div>

			{#if expanded}
				<div
					transition:slide={{ duration: 400 }}
					class="mt-3 w-full overflow-hidden border-t border-border-subtle pt-3 text-content"
				>
					<div class="text-sm leading-relaxed opacity-90 tracking-wide">
						{@html details}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.milestone-container {
		left: 10%;
		transform: translate(-6px, -50%);
	}

	@media (min-width: 768px) {
		.milestone-container {
			left: var(--desktop-x) !important;
		}
	}
</style>
