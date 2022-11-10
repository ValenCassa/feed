import { writable } from 'svelte/store';

export const dataStore = writable({
	posts: [],
	views: 0
});
