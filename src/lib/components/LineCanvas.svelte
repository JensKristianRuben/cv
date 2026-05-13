<script lang="ts">
	let { points = [], height = 3000, workHeaderY = 230, eduHeaderY = 230, progress = 0 } = $props();

	function generatePath(pts: any[], centerX: number, startY: number, forceStraight: boolean = false) {
		const sortedPts = [...pts].sort((a, b) => a.y - b.y);
		const pathStartY = startY;

		const allPoints = [
			{ x: centerX, y: pathStartY },
			...sortedPts.map(p => ({ x: forceStraight ? centerX : p.x, y: p.y }))
		];

		if (allPoints.length < 2) return "";

		let d = `M ${allPoints[0].x} ${allPoints[0].y}`;
		for (let i = 1; i < allPoints.length; i++) {
			d += ` L ${allPoints[i].x} ${allPoints[i].y}`;
		}
		return d;
	}

	let workPoints = $derived(points.filter((p: any) => p.type === 'work'));
	let eduPoints = $derived(points.filter((p: any) => p.type === 'education'));

	let workPathData = $derived(generatePath(workPoints, 25, workHeaderY, true));
	let eduPathData = $derived(generatePath(eduPoints, 75, eduHeaderY, true));
	
	let mobileWorkPathData = $derived(generatePath(workPoints, 10, workHeaderY, true));
	let mobileEduPathData = $derived(generatePath(eduPoints, 10, eduHeaderY, true));

	// The visual growth of the line is tied to 'progress * height'
	// We use this to calculate the dashoffset
	let maxWorkY = $derived(workPoints.length > 0 ? Math.max(...workPoints.map((p: any) => p.y)) : height);
	let maxEduY = $derived(eduPoints.length > 0 ? Math.max(...eduPoints.map((p: any) => p.y)) : height);
</script>

<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" style="height: {height}px">
	<svg
		viewBox="0 0 100 {height}"
		preserveAspectRatio="none"
		class="h-full w-full"
	>
		<!-- Desktop Paths -->
		<g class="hidden md:block">
			<path
				d={workPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				stroke-dasharray={maxWorkY}
				stroke-dashoffset={Math.max(0, maxWorkY - (progress * height))}
				class="text-content/10"
			/>
			<path
				d={eduPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				stroke-dasharray={maxEduY}
				stroke-dashoffset={Math.max(0, maxEduY - (progress * height))}
				class="text-content/10"
			/>
		</g>

		<!-- Mobile Path -->
		<g class="md:hidden">
			<path
				d={mobileWorkPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				stroke-dasharray={maxWorkY}
				stroke-dashoffset={Math.max(0, maxWorkY - (progress * height))}
				class="text-content/10"
			/>
			<path
				d={mobileEduPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				stroke-dasharray={maxEduY}
				stroke-dashoffset={Math.max(0, maxEduY - (progress * height))}
				class="text-content/10"
			/>
		</g>
	</svg>
</div>
