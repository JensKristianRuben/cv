<script lang="ts">
	let { project, index, labels } = $props();
	
	const isEven = index % 2 === 0;
</script>

<section class="group relative w-full py-24 md:py-32 lg:py-48 first:pt-48 border-b border-content/5 last:border-0">
	<div 
		class="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl flex flex-col gap-12 md:gap-20 
		{isEven ? 'md:flex-row' : 'md:flex-row-reverse'}"
	>
		<!-- Image Side -->
		<div class="w-full md:w-3/5 overflow-hidden">
			<div 
				class="relative aspect-[16/10] w-full overflow-hidden"
				style:background-image={project.title === 'Medarbejderrejsen' || project.title === 'The Employee Journey' ? project.gradient : 'none'}
			>
				{#if project.image}
					<img 
						src={project.image} 
						alt={project.title}
						loading="lazy"
						class="h-full w-full object-contain p-8 md:p-12 {project.title === 'APIX' ? 'scale-75' : ''}"
					/>
				{:else}
					<div class="h-full w-full flex items-center justify-center">
						<span class="text-[10px] uppercase tracking-[0.3em] opacity-20">Case Study</span>
					</div>
				{/if}
			</div>
		</div>

		<!-- Content Side -->
		<div class="w-full md:w-2/5 flex flex-col justify-center">
			<h2 class="mb-6 text-3xl font-extralight uppercase tracking-[0.15em] leading-tight lg:text-4xl">
				{project.title}
			</h2>
			
			<p class="mb-10 text-sm leading-relaxed tracking-wider opacity-60 max-w-md font-light">
				{project.description}
			</p>
			
			{#if !project.hideButton}
				<div class="flex items-center">
					{#if project.link}
						<a 
							href={project.link} 
							target="_blank" 
							rel="noopener noreferrer"
							class="group/link relative inline-flex items-center text-[10px] uppercase tracking-[0.5em] transition-all"
						>
							<span class="relative z-10">{labels.viewProject}</span>
							<span class="absolute -bottom-2 left-0 h-px w-0 bg-content transition-all duration-300 group-hover/link:w-full"></span>
						</a>
					{:else}
						<span class="text-[10px] uppercase tracking-[0.5em] opacity-30 italic">
							{labels.viewCaseStudy}
						</span>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Minimalist custom styles if needed */
</style>
