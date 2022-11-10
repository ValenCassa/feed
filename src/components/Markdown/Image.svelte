<script>
	import clsx from 'clsx';

	export let text;
	export let href;
	export let title;

	$: href;
</script>

<img
	src={href}
	class={clsx(
		'relative',
		'max-h-[200px]',
		'w-full',
		'h-full',
		'rounded-sm',
		'object-cover',
		'object-center',
		'my-2'
	)}
	alt={text}
/>
