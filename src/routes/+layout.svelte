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

<svelte:head>
	<title>Feed • Valentin Cassarino</title>
	<meta property="og:title" content={'Feed • Valentin Cassarino'} />
	<meta property="twitter:title" content={'Feed • Valentin Cassarino'} />

	<meta property="description" content={'Welcome to feed!'} />
	<meta property="og:description" content={'Welcome to feed!'} />
	<meta name="twitter:description" content={'Welcome to feed!'} />

	<meta property="og:image" content={'https://i.imgur.com/joO1Icy.png'} />
	<meta name="twitter:image" content={'https://i.imgur.com/joO1Icy.png'} />
	<meta name="image" content={'https://i.imgur.com/joO1Icy.png'} />

	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

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
