<script lang="ts">
	import { onMount } from 'svelte';

	let { project, index, labels } = $props();
	
	let element: HTMLElement;
	let progress = $state(0);

	onMount(() => {
		const handleScroll = () => {
			if (!element) return;
			const rect = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			
			// Calculate progress from 0 (bottom of screen) to 1 (leaving top)
			// progress 0.5 is centered
			const totalDist = windowHeight + rect.height;
			const currentDist = windowHeight - rect.top;
			progress = Math.max(0, Math.min(1, currentDist / totalDist));
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Transform interpolation factor (0 at center, 1 at edges)
	let offsetFactor = $derived(Math.abs(0.5 - progress) * 2);
	let opacity = $derived(Math.max(0, 1 - offsetFactor * 1.5)); // Fades out faster than it moves

	// Entry vs Exit detection
	let isExiting = $derived(progress > 0.5);

	let transform = $derived.by(() => {
		const t = project.animationType;
		const multiplier = isExiting ? 1 : -1;
		
		switch (t) {
			case 'slide-left':
				return `translateX(${offsetFactor * 100 * -multiplier}%)`;
			case 'slide-right':
				return `translateX(${offsetFactor * 100 * multiplier}%)`;
			case 'zoom-in':
				return `scale(${1 - offsetFactor * 0.5})`;
			case 'flip':
				return `rotateY(${offsetFactor * 90 * multiplier}deg) perspective(1000px)`;
			case 'drop-down':
				return `translateY(${offsetFactor * 100 * -multiplier}%)`;
			case 'slide-up':
				return `translateY(${offsetFactor * 100 * multiplier}%)`;
			case 'fade-scale':
				return `scale(${1 + offsetFactor * 0.2})`;
			case 'spin-in':
				return `rotate(${offsetFactor * 180 * multiplier}deg) scale(${1 - offsetFactor * 0.5})`;
			case '3d-unfold':
				return `rotateX(${offsetFactor * -90 * multiplier}deg) rotateY(${offsetFactor * 45 * multiplier}deg) perspective(2000px)`;
			case 'diagonal':
				return `translate(${offsetFactor * 50 * -multiplier}%, ${offsetFactor * 50 * multiplier}%)`;
			case 'perspective-zoom':
				return `perspective(1000px) translateZ(${offsetFactor * -500}px) rotateX(${offsetFactor * 20 * multiplier}deg)`;
			case 'skew-reveal':
				return `skewX(${offsetFactor * 20 * multiplier}deg) translateX(${offsetFactor * 50 * -multiplier}%)`;
			case 'blur-focus':
				return `scale(${1 + offsetFactor * 0.1})`;
			default:
				return 'none';
		}
	});

	let filter = $derived.by(() => {
		if (project.animationType === 'blur-focus') {
			return `blur(${offsetFactor * 10}px)`;
		}
		return 'none';
	});
</script>

<section 
	bind:this={element}
	class="flex min-h-[60vh] lg:min-h-[80vh] w-full items-center justify-center px-6 md:px-12 lg:px-20"
>
	<div 
		class="relative flex w-full max-w-2xl xl:max-w-5xl flex-col items-center gap-6 lg:gap-10 md:flex-row"
		style:opacity={opacity}
		style:transform={transform}
		style:filter={filter}
		style:will-change="transform, opacity, filter"
	>
		<!-- Image Side -->
		<div class="group relative aspect-[4/3] w-full overflow-hidden rounded-sm md:w-1/2">
			{#if project.image}
				<img 
					src={project.image} 
					alt={project.title}
					class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
			{:else}
				<div 
					class="h-full w-full bg-gradient-to-br transition-transform duration-700 group-hover:scale-105"
					style:background-image={project.gradient}
				>
					<!-- Abstract pattern placeholder -->
					<svg class="h-full w-full opacity-20" viewBox="0 0 100 100">
						<defs>
							<pattern id="grid-{index}" width="10" height="10" patternUnits="userSpaceOnUse">
								<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
							</pattern>
						</defs>
						<rect width="100" height="100" fill="url(#grid-{index})" />
						<circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="0.2" />
					</svg>
				</div>
			{/if}
			
			<!-- Project Number Overlay -->
			<div class="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.5em] opacity-30">
				Project // 0{index + 1}
			</div>
		</div>

		<!-- Content Side -->
		<div class="flex flex-col items-start text-left md:w-1/2 md:pr-4">
			<h2 class="mb-4 text-2xl font-light uppercase tracking-[0.2em] leading-tight md:text-3xl lg:text-4xl lg:mb-6 break-words overflow-wrap-anywhere">
				{project.title}
			</h2>
			<div class="h-px w-20 bg-content/20 mb-6 lg:mb-8"></div>
			<p class="text-xs leading-relaxed tracking-wider opacity-60 md:text-sm lg:text-base">
				{project.description}
			</p>
			
			{#if project.link}
				<a 
					href={project.link} 
					target="_blank" 
					rel="noopener noreferrer"
					class="mt-8 lg:mt-10 border border-content/20 px-6 py-2.5 text-[10px] uppercase tracking-[0.5em] transition-all hover:bg-content hover:text-canvas"
				>
					{labels.viewProject}
				</a>
			{:else}
				<button class="mt-8 lg:mt-10 border border-content/20 px-6 py-2.5 text-[10px] uppercase tracking-[0.5em] transition-all hover:bg-content hover:text-canvas">
					{labels.viewCaseStudy}
				</button>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Prevent horizontal scroll during animations */
	section {
		overflow: hidden;
	}
</style>
