<script lang="ts">
	import { onMount } from 'svelte';

	let { project, index, labels } = $props();
	
	let element: HTMLElement;
	let progress = $state(0);
	let lerpedProgress = $state(0);

	onMount(() => {
		const container = element.parentElement;
		if (!container) return;

		let rafId: number;
		const LERP_FACTOR = 0.025; // Lowered from 0.04 to make it slower and "heavier"

		const updateLerp = () => {
			const diff = progress - lerpedProgress;
			if (Math.abs(diff) > 0.0001) {
				lerpedProgress += diff * LERP_FACTOR;
			} else {
				lerpedProgress = progress;
			}
			rafId = requestAnimationFrame(updateLerp);
		};

		const handleScroll = () => {
			if (!element) return;
			const rect = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			
			// Map rect.top to progress
			// 1.0 (at bottom) -> 0.5 (centered) -> 0.0 (at top)
			const currentTop = rect.top;
			let targetProgress = 0.5 - (currentTop / (windowHeight * 2));
			progress = Math.max(0, Math.min(1, targetProgress));
		};

		container.addEventListener('scroll', handleScroll, { passive: true });
		rafId = requestAnimationFrame(updateLerp);
		
		// Initial sync
		setTimeout(() => {
			handleScroll();
			lerpedProgress = progress;
		}, 100);

		return () => {
			container.removeEventListener('scroll', handleScroll);
			cancelAnimationFrame(rafId);
		};
	});

	// Helper to calculate individual element visibility based on lerpedProgress
	function getElementStyle(order: number) {
		const delay = order * 0.04;
		
		// Entry: Element should be fully visible by progress 0.45
		const entryStart = 0.1 + delay;
		const entryEnd = 0.4 + delay;
		
		// Exit: Element starts disappearing at progress 0.6
		const exitStart = 0.6 - delay;
		const exitEnd = 0.9 - delay;

		let opacity = 0;
		let yOffset = 40;

		if (lerpedProgress >= entryEnd && lerpedProgress <= exitStart) {
			opacity = 1;
			yOffset = 0;
		} else if (lerpedProgress > entryStart && lerpedProgress < entryEnd) {
			const p = (lerpedProgress - entryStart) / (entryEnd - entryStart);
			// Ease out cubic for the lerp path
			const ease = 1 - Math.pow(1 - p, 3);
			opacity = ease;
			yOffset = 40 * (1 - ease);
		} else if (lerpedProgress > exitStart && lerpedProgress < exitEnd) {
			const p = (lerpedProgress - exitStart) / (exitEnd - exitStart);
			const ease = 1 - Math.pow(1 - p, 3);
			opacity = 1 - ease;
			yOffset = -40 * ease;
		} else if (lerpedProgress >= exitEnd) {
			opacity = 0;
			yOffset = -40;
		}

		// We remove CSS transition because the lerping loop handles the frames
		return `opacity: ${opacity}; transform: translateY(${yOffset}px); will-change: opacity, transform;`;
	}

	// Layout variations
	const isEven = index % 2 === 0;
	const isLargeImage = index % 3 === 0;
</script>

<section 
	bind:this={element}
	class="relative flex h-screen w-full shrink-0 snap-start snap-always items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20"
>
	<div 
		class="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-6 md:gap-12 lg:gap-16 
		{isEven ? 'md:flex-row' : 'md:flex-row-reverse'}"
	>
		<!-- Image Side -->
		<div 
			class="relative flex items-center justify-center overflow-hidden h-[25vh] w-full md:h-[60vh] 
			{isLargeImage ? 'md:w-[60%]' : 'md:w-1/2'}"
			style={getElementStyle(0)}
		>
			<div 
				class="relative aspect-video md:aspect-auto h-full w-full overflow-hidden rounded-sm"
				style:background-image={project.title === 'Medarbejderrejsen' || project.title === 'The Employee Journey' ? project.gradient : 'none'}
			>
				{#if project.image}
					<img 
						src={project.image} 
						alt={project.title}
						class="h-full w-full object-contain p-4 md:p-8 {project.title === 'APIX' ? 'scale-75' : ''}"
					/>
				{:else}
					<div class="h-full w-full bg-content/10 flex items-center justify-center">
						<span class="text-[10px] uppercase tracking-widest opacity-20">No Image</span>
					</div>
				{/if}
			</div>
		</div>

		<!-- Content Side -->
		<div 
			class="relative z-10 flex flex-col items-start text-left md:h-[60vh] md:justify-center
			{isLargeImage ? 'md:w-[40%] md:pl-12' : 'md:w-1/2'}"
		>
			<h2 
				class="mb-4 text-xl font-light uppercase tracking-[0.2em] leading-tight md:text-2xl lg:text-3xl lg:mb-6 max-w-full"
				style={getElementStyle(1)}
			>
				{project.title}
			</h2>
			
			<div 
				class="h-px w-20 bg-content/20 mb-6 lg:mb-8"
				style={getElementStyle(2)}
			></div>
			
			<p 
				class="mb-8 text-xs leading-relaxed tracking-wider opacity-60 md:text-sm lg:text-base lg:mb-10 max-w-md"
				style={getElementStyle(3)}
			>
				{project.description}
			</p>
			
			{#if !project.hideButton}
				<div style={getElementStyle(4)}>
					{#if project.link}
						<a 
							href={project.link} 
							target="_blank" 
							rel="noopener noreferrer"
							class="border border-content/20 px-8 py-3 text-[10px] uppercase tracking-[0.5em] transition-all hover:bg-content hover:text-canvas"
						>
							{labels.viewProject}
						</a>
					{:else}
						<button class="border border-content/20 px-8 py-3 text-[10px] uppercase tracking-[0.5em] transition-all hover:bg-content hover:text-canvas">
							{labels.viewCaseStudy}
						</button>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		will-change: transform;
	}
</style>
