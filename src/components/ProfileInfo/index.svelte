<script>
	import Link from '../../icons/Link.svelte';
	import Location from '../../icons/Location.svelte';
	import Views from '../../icons/Views.svelte';
	import Container from '$components/Container/index.svelte';
	import { page } from '$app/stores';
</script>

<div
	class="sticky text-sm top-0 w-100 h-[44px] mt-4 flex align-center border-y bg-[rgba(252, 252, 252, 0.44)] border-borderGray backdrop-filter backdrop-blur-md z-10"
>
	<Container sx={'grid place-content-center'}>
		<p class="font-bold">Valen</p>
	</Container>
</div>
<div
	class="relative w-100 h-[42px] -mt-[43px] bg-bodyBackground grid grid-cols-3 place-content-center text-sm z-20"
>
	<div class="flex gap-2 justify-center">
		<span class="grid place-content-center">
			<Link />
		</span>
		<a
			href="https://valencassa.dev"
			target="_blank"
			rel="noreferrer"
			class="grid place-content-center hover:underline"
		>
			Portfolio
		</a>
	</div>
	<div class="flex gap-2 justify-center">
		<span class="grid place-content-center">
			<Location />
		</span>
		<p class="grid place-content-center">Argentina</p>
	</div>
	<div class="flex gap-2 justify-center">
		<span class="grid place-content-center">
			<Views />
		</span>
		<p class="grid place-content-center">{$page.data.views}</p>
	</div>
</div>
