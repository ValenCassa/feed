import axios from 'axios';
import { getViews } from '../services/views';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const data = await axios.get('http://localhost:5173/api/posts');
		const views = await getViews();

		return {
			posts: data.data,
			views
		};
	} catch (e) {
		console.log(e);
		return {
			posts: [
				{
					id: 1,
					body: 'test',
					date: new Date()
				}
			],
			views: 0
		};
	}
}
