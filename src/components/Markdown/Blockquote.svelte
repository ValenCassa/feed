<script>
	let data;
	let type = 'success';
	import clsx from 'clsx';

	$: {
		if (data) {
			const content = data.textContent;
			if (content.includes('$$danger')) {
				data.textContent = content.replace('$$danger', '');
				type = 'danger';
			} else if (content.includes('$$warning')) {
				data.textContent = content.replace('$$warning', '');
				type = 'warning';
			} else if (content.includes('$$success')) {
				data.textContent = content.replace('$$success', '');
				type = 'success';
			} else {
				type = 'success';
			}
		}
	}

	const color = {
		success: 'border-success text-success bg-lightSuccess',
		danger: 'border-danger text-danger bg-lightDanger',
		warning: 'border-warning text-warning bg-lightWarning'
	};
</script>

<blockquote
	class={clsx(color[type], 'p-3', 'border-l-4', 'font-medium', 'rounded-md', 'my-2')}
	bind:this={data}
>
	<slot />
</blockquote>
