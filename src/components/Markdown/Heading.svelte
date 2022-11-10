<script>
	export let depth = 1;
</script>

{#if depth === 1}
	<h1 class="text-3xl font-bold text-textPrimary">
		<slot />
	</h1>
{:else if depth === 2}
	<h2 class="text-2xl font-bold text-textPrimary">
		<slot />
	</h2>
{:else if depth === 3}
	<h3 class="text-xl font-bold text-textPrimary">
		<slot />
	</h3>
{:else if depth === 4}
	<h4 class="text-lg font-bold text-textPrimary">
		<slot />
	</h4>
{:else if depth === 5}
	<h5 class="text-base font-bold text-textPrimary">
		<slot />
	</h5>
{:else if depth === 6}
	<h6 class="text-sm font-bold text-textPrimary">
		<slot />
	</h6>
{/if}
