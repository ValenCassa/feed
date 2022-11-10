import axios from 'axios';
import { getViews } from '../services/views';
import { API_URL } from '../utils/apiUtils';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const data = await axios.get(`${API_URL}/api/posts`);
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
