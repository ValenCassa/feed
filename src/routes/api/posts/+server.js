import db from '$utils/mongoClient';
import jwt from 'jsonwebtoken';
import * as cheerio from 'cheerio';
import { ObjectId } from 'mongodb';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const data = await db.collection('posts').find({}).toArray();
	const opengraphVar = '$$opengraph';

	const posts = await Promise.all(
		data.map(async (post) => {
			if (post.body.includes(opengraphVar)) {
				const [body, opengraph] = post.body.split(opengraphVar);
				const href = opengraph.split(' ')[1];

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

						return {
							...post,
							body,
							opengraph: og
						};
					})
					.catch((e) => {
						console.log(e);
						return post;
					});

				return ogData;
			} else {
				return post;
			}
		})
	);

	return new Response(JSON.stringify(posts));
}

export async function POST({ request }) {
	const token = request.headers.get('Authorization')?.split(' ')[1];
	const decodedToken = token ? jwt.verify(token, env.JWT_SECRET) : false;

	if (!token || !decodedToken.password) {
		return new Response(JSON.stringify({ status: 'Unauthorized' }));
	}

	const { body } = await request.json();
	const data = await db.collection('posts').insertOne({
		body,
		date: new Date()
	});

	const newPost = await db.collection('posts').findOne({ _id: data.insertedId });
	return new Response(JSON.stringify(newPost));
}

export async function DELETE({ url, request }) {
	const token = request.headers.get('Authorization')?.split(' ')[1];
	const decodedToken = token ? jwt.verify(token, env.JWT_SECRET) : false;

	if (!token || !decodedToken.password) {
		return new Response(JSON.stringify({ status: 'Unauthorized' }));
	}
	const { searchParams } = url;

	const data = await db.collection('posts').deleteOne({ _id: ObjectId(searchParams.get('id')) });

	return new Response(JSON.stringify(data));
}
