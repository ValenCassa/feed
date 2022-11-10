<script>
	import Header from '$components/Header/index.svelte';
	import Profile from '$components/Profile/index.svelte';
	import { dataStore } from '../stores/dataStore';
	import Posts from '$components/Posts/index.svelte';

	export let data;

	$: {
		dataStore.set(data);
	}
</script>

<Header />
<Profile />
<Posts />
