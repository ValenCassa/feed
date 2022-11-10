<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import PostModal from '../components/PostModal/PostModal.svelte';
	import { getSession } from '../services/session';
	import { authenticated } from '../stores/sessionStore';
	export let path = '';
	let refresh;

	onMount(() => {
		refresh = path;
		getSession()
			.then((data) => {
				const { status } = data;

				if (status === 'Authorized') {
					authenticated.set(true);
				} else {
					authenticated.set(false);
				}
			})
			.catch((err) => {
				authenticated.set(false);
			});
	});
</script>

{#key refresh}
	<div
		class="max-w-xl m-auto sm:pt-[4em] sm:min-h-screen relative flex"
		in:fade={{ opacity: 0, duration: 500 }}
	>
		<div
			class="sm:border-x sm:border-t sm:rounded-xl sm:border-borderGray relative min-h-full min-w-full"
		>
			<slot />
		</div>
	</div>
{/key}
<PostModal />
