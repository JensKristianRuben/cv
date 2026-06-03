<script lang="ts">
	import { onMount } from 'svelte';
	import { svgPaths } from '$lib/svgPaths';

	let { progress = 0 } = $props();

	let arrowLengths = $state<Record<string, number>>({});
	let arrowRefs = $state<Record<string, SVGPathElement>>({});

	const steps = [
		{ arrows: ['arrow-code'], text: 'code' },
		{ arrows: ['arrow-build'], text: 'build' },
		{ arrows: ['arrow-test'], text: 'test' },
		{ arrows: ['arrow-release'], text: 'release' },
		{ arrows: ['arrow-deploy'], text: 'deploy' },
		{ arrows: ['arrow-operate'], text: 'operate' },
		{ arrows: ['arrow-monitor'], text: 'monitor' },
		{ arrows: ['arrow-plan-top', 'arrow-plan-bottom'], text: 'plan' }
	];

	onMount(() => {
		// Calculate lengths for all arrow paths
		Object.entries(arrowRefs).forEach(([id, path]) => {
			if (path) {
				arrowLengths[id] = path.getTotalLength();
			}
		});
	});

	function getStepProgress(stepIndex: number, totalProgress: number) {
		const stepSize = 1 / steps.length;
		const start = stepIndex * stepSize;
		const end = (stepIndex + 1) * stepSize;

		if (totalProgress <= start) return 0;
		if (totalProgress >= end) return 1;

		return (totalProgress - start) / (end - start);
	}

	function getDrawProgress(stepProgress: number) {
		// Draw much faster: first 40% of step
		return Math.min(stepProgress / 0.4, 1);
	}

	function getFillProgress(stepProgress: number) {
		// Fill starts immediately after draw: from 40% to 60%
		if (stepProgress < 0.4) return 0;
		return Math.min((stepProgress - 0.4) / 0.2, 1);
	}
</script>

<svg 
	viewBox="0 0 528 244" 
	fill="none" 
	xmlns="http://www.w3.org/2000/svg" 
	class="w-full h-auto"
>
	{#each steps as step, i}
		{@const stepProgress = getStepProgress(i, progress)}
		{@const drawProgress = getDrawProgress(stepProgress)}
		{@const fillProgress = getFillProgress(stepProgress)}

		<!-- Arrows for this step -->
		{#each step.arrows as arrowId}
			<path 
				bind:this={arrowRefs[arrowId]}
				d={svgPaths[arrowId]}
				stroke-width="1.5"
				stroke-dasharray={arrowLengths[arrowId] || 0}
				stroke-dashoffset={(arrowLengths[arrowId] || 0) * (1 - drawProgress)}
				fill-opacity={fillProgress}
				class="transition-colors duration-300"
				stroke={i < 4 ? 'var(--svg-shade-1)' : 'var(--svg-shade-2)'}
				fill={i < 4 ? 'var(--svg-shade-1)' : 'var(--svg-shade-2)'}
			/>
		{/each}

		<!-- Text for this step -->
		{#if stepProgress > 0.4}
			<path 
				d={svgPaths[step.text]}
				opacity={fillProgress}
				class="text-path transition-opacity duration-300"
				fill={fillProgress > 0.5 ? 'var(--bg)' : 'transparent'}
			/>
		{/if}
	{/each}
</svg>

<style>
	.text-path {
		fill: var(--bg);
	}
</style>
