<script>
	export let href = '';
	export let title = undefined;
</script>

<a
	{href}
	{title}
	class="underline hover:text-black text-neutral-600"
	target="_blank"
	rel="noreferrer"><slot /></a
>
