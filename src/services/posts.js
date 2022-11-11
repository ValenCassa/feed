import axios from 'axios';
import { getCookie } from '../utils/cookies';
import * as cheerio from 'cheerio';

export const createPost = async (payload) => {
	const cookie = getCookie('token');
	const data = await axios.post('/api/posts', payload, {
		headers: {
			Authorization: `Bearer ${cookie}`
		}
	});
	return data.data;
};

export const deletePost = async (id) => {
	const data = await axios.delete(`/api/posts?id=${id}`, {
		headers: {
			Authorization: `Bearer ${getCookie('token')}`
		}
	});
	return data.data;
};

export const getOpenGraph = async (href) => {
	const ogData = await fetch(href)
		.then((res) => res.text())
		.then((text) => {
			const $ = cheerio.load(text);
			const doc = $('html');
			const og = {
				title: doc.find('meta[property="og:title"]').attr('content'),
				description: doc.find('meta[property="og:description"]').attr('content'),
				image: doc.find('meta[property="og:image"]').attr('content'),
				href: href
			};

			return og;
		})
		.catch((e) => {
			console.log(e);
			return;
		});

	return ogData;
};
