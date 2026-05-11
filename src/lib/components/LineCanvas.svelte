<script lang="ts">
	import { onMount } from 'svelte';

	let { points = [], height = 3000, workHeaderY = 230, eduHeaderY = 230 } = $props();
	let scrollProgress = $state(0);

	/**
	 * Generates a simple straight path connecting milestones.
	 */
	function generatePath(pts: any[], centerX: number, startY: number, forceStraight: boolean = false) {
		const sortedPts = [...pts].sort((a, b) => a.y - b.y);
		
		const allPoints = [
			{ x: centerX, y: startY },
			...sortedPts.map(p => ({ x: forceStraight ? centerX : p.x, y: p.y }))
		];

		if (allPoints.length < 2) return "";

		// Create a simple polyline path
		let d = `M ${allPoints[0].x} ${allPoints[0].y}`;
		
		for (let i = 1; i < allPoints.length; i++) {
			d += ` L ${allPoints[i].x} ${allPoints[i].y}`;
		}
		
		return d;
	}

	let workPoints = $derived(points.filter((p: any) => p.type === 'work'));
	let eduPoints = $derived(points.filter((p: any) => p.type === 'education'));

	let workPathData = $derived(generatePath(workPoints, 25, workHeaderY));
	let eduPathData = $derived(generatePath(eduPoints, 75, eduHeaderY));
	
	// Mobile: Perfectly straight paths at 10% X
	let mobileWorkPathData = $derived(generatePath(workPoints, 10, workHeaderY, true));
	let mobileEduPathData = $derived(generatePath(eduPoints, 10, eduHeaderY, true));

	let maxWorkY = $derived(workPoints.length > 0 ? Math.max(...workPoints.map((p: any) => p.y)) : height);
	let maxEduY = $derived(eduPoints.length > 0 ? Math.max(...eduPoints.map((p: any) => p.y)) : height);

	onMount(() => {
		const handleScroll = () => {
			const winScroll = window.scrollY;
			const viewportHeight = window.innerHeight;
			
			// headPosition is the Y-coordinate on the canvas where the line "ends" 
			// as we scroll. By adding half the viewport height, the line 
			// will appear to "hit" milestones when they are in the center of the screen.
			const headPosition = winScroll + (viewportHeight * 0.2);
			
			// If we are at the very top, keep it at 0
			if (winScroll <= 0) {
				scrollProgress = 0;
			} else {
				scrollProgress = Math.min(1, headPosition / height);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Initial check
		
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" style="height: {height}px">
	<svg
		viewBox="0 0 100 {height}"
		preserveAspectRatio="none"
		class="h-full w-full"
	>
		<!-- Desktop Paths -->
		<g class="hidden md:block">
			<!-- Work Path -->
			<path
				d={workPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={1 - Math.min(1, (scrollProgress * height) / maxWorkY)}
				class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
			/>

			<!-- Education Path -->
			<path
				d={eduPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={1 - Math.min(1, (scrollProgress * height) / maxEduY)}
				class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
			/>
		</g>

		<!-- Mobile Path -->
		<g class="md:hidden">
			<!-- Work Path -->
			<path
				d={mobileWorkPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={1 - Math.min(1, (scrollProgress * height) / maxWorkY)}
				class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
			/>

			<!-- Education Path -->
			<path
				d={mobileEduPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={1 - Math.min(1, (scrollProgress * height) / maxEduY)}
				class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
			/>
		</g>
	</svg>
</div>
