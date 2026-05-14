<script lang="ts">
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';

	let { title, date, summary, details, type = 'work' } = $props();
	
	let visible = $state(false);
	let element: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				} else {
					visible = false;
				}
			});
		}, {
			threshold: 0.3
		});

		observer.observe(element);
		return () => observer.disconnect();
	});

	const isWork = type === 'work';
</script>

<section 
	bind:this={element}
	class="snap-start min-h-screen w-full flex items-center justify-center relative px-8 md:px-0"
>
	<div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)] w-full max-w-7xl items-center">
		
		<!-- Left Side (Work) -->
		<div class="flex flex-col md:items-end md:text-right md:pr-16 {isWork ? 'flex' : 'hidden md:flex md:opacity-0 md:pointer-events-none'}">
			{#if isWork && visible}
				<div class="flex flex-col md:items-end w-full">
					<span 
						transition:fade={{ delay: 100, duration: 800 }}
						class="mb-2 text-xs md:text-sm uppercase tracking-[0.4em] opacity-40 font-medium"
					>
						{date}
					</span>
					<h2 
						transition:fade={{ delay: 300, duration: 800 }}
						class="mb-3 text-xl md:text-2xl lg:text-3xl tracking-widest uppercase leading-tight font-bold text-accent break-words max-w-full"
					>
						{title}
					</h2>
					<p 
						transition:fade={{ delay: 500, duration: 800 }}
						class="text-base md:text-lg lg:text-xl leading-relaxed opacity-80 font-medium max-w-md"
					>
						{summary}
					</p>
					
					<div 
						transition:slide={{ delay: 700, duration: 600 }}
						class="mt-6 pt-6 border-t border-content/10 md:text-right w-full flex md:justify-end"
					>
						<div class="text-base md:text-lg leading-relaxed opacity-60 tracking-wide max-w-md">
							{@html details}
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Middle Line (Dot) -->
		<div class="hidden md:flex flex-col items-center justify-center h-full relative">
			<div 
				class="w-4 h-4 rounded-full border-2 border-accent bg-canvas z-10 transition-transform duration-700 {visible ? 'scale-100' : 'scale-0'}"
			></div>
		</div>

		<!-- Right Side (Education) -->
		<div class="flex flex-col md:items-start md:text-left md:pl-16 {!isWork ? 'flex' : 'hidden md:flex md:opacity-0 md:pointer-events-none'}">
			{#if !isWork && visible}
				<div class="flex flex-col md:items-start w-full">
					<span 
						transition:fade={{ delay: 100, duration: 800 }}
						class="mb-2 text-xs md:text-sm uppercase tracking-[0.4em] opacity-40 font-medium"
					>
						{date}
					</span>
					<h2 
						transition:fade={{ delay: 300, duration: 800 }}
						class="mb-3 text-xl md:text-2xl lg:text-3xl tracking-widest uppercase leading-tight font-bold text-accent break-words max-w-full"
					>
						{title}
					</h2>
					<p 
						transition:fade={{ delay: 500, duration: 800 }}
						class="text-base md:text-lg lg:text-xl leading-relaxed opacity-80 font-medium max-w-md"
					>
						{summary}
					</p>
					
					<div 
						transition:slide={{ delay: 700, duration: 600 }}
						class="mt-6 pt-6 border-t border-content/10 md:text-left w-full"
					>
						<div class="text-base md:text-lg leading-relaxed opacity-60 tracking-wide max-w-md">
							{@html details}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
