<script lang="ts">
	import { onMount } from 'svelte';

	let { title, date, summary, details, type = 'work' } = $props();
	
	let isActive = $state(false);
	let element: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				isActive = entry.isIntersecting;
			});
		}, {
			// Trigger when the element is in the middle section of the viewport
			rootMargin: '-48% 0px -48% 0px',
			threshold: 0
		});

		observer.observe(element);
		return () => observer.disconnect();
	});

	const isWork = type === 'work';
</script>

<section 
	bind:this={element}
	class="w-full relative py-16 md:py-24 px-4 md:px-0"
>
	<div class="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_2px_1fr] w-full max-w-7xl mx-auto items-center">
		
		<!-- Left Side (Work on Desktop) -->
		<div class="hidden md:flex flex-col md:items-end md:text-right md:pr-16 {isWork ? '' : 'md:opacity-0 md:pointer-events-none'}">
			<div class="flex flex-col md:items-end w-full">
				<span class="mb-2 text-xs md:text-sm uppercase tracking-[0.4em] opacity-40 font-medium">
					{date}
				</span>
				<h2 class="mb-3 text-xl md:text-2xl lg:text-3xl tracking-widest uppercase leading-tight font-bold text-accent break-words max-w-full">
					{title}
				</h2>
				<p class="text-base md:text-lg lg:text-xl leading-relaxed opacity-80 font-medium max-w-md">
					{summary}
				</p>
				
				<div class="mt-6 pt-6 border-t border-content/10 md:text-right w-full flex md:justify-end">
					<div class="text-base md:text-lg leading-relaxed opacity-60 tracking-wide max-w-md">
						{@html details}
					</div>
				</div>
			</div>
		</div>

		<!-- Middle Line (Dot) -->
		<div class="flex flex-col items-center justify-center h-full relative z-10">
			<div 
				class="w-4 h-4 rounded-full border-2 transition-all duration-500 ease-out bg-canvas
				{isActive ? 'border-accent scale-150 shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] bg-accent' : 'border-accent/30 scale-100 bg-canvas'}"
			></div>
		</div>

		<!-- Right Side (Education on Desktop, All on Mobile) -->
		<div class="flex flex-col md:items-start md:text-left md:pl-16 {!isWork ? 'flex' : 'md:flex md:opacity-0 md:pointer-events-none'}">
			<div class="flex flex-col md:items-start w-full pl-4 md:pl-0">
				<!-- Mobile-only Date -->
				<span class="md:hidden mb-1 text-[10px] uppercase tracking-widest text-accent font-bold">
					{isWork ? 'Work' : 'Education'}
				</span>
				
				<span class="mb-2 text-xs md:text-sm uppercase tracking-[0.4em] opacity-40 font-medium">
					{date}
				</span>
				<h2 class="mb-3 text-xl md:text-2xl lg:text-3xl tracking-widest uppercase leading-tight font-bold text-accent break-words max-w-full">
					{title}
				</h2>
				<p class="text-base md:text-lg lg:text-xl leading-relaxed opacity-80 font-medium max-w-md">
					{summary}
				</p>
				
				<div class="mt-6 pt-6 border-t border-content/10 md:text-left w-full">
					<div class="text-base md:text-lg leading-relaxed opacity-60 tracking-wide max-w-md">
						{@html details}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
