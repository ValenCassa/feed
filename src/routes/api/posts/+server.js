import db from '$utils/mongoClient';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import { env } from '$env/dynamic/private';
import { getOpenGraph } from '../../../services/posts';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = await db.collection('posts').find({}).toArray();

	return new Response(JSON.stringify(posts));
}

export async function POST({ request }) {
	const token = request.headers.get('Authorization')?.split(' ')[1];
	const decodedToken = token ? jwt.verify(token, env.JWT_SECRET) : false;

	if (!token || !decodedToken.password) {
		return new Response(JSON.stringify({ status: 'Unauthorized' }));
	}

	const { body: post } = await request.json();
	const opengraphVar = '$$opengraph';

	if (post.includes(opengraphVar)) {
		const [body, og] = post.split(opengraphVar);
		const href = og.split(' ')[1];
		const opengraph = await getOpenGraph(href);

		const data = await db.collection('posts').insertOne({
			body,
			opengraph,
			date: new Date()
		});

		const newPost = await db.collection('posts').findOne({ _id: data.insertedId });
		return new Response(JSON.stringify(newPost));
	}

	const data = await db.collection('posts').insertOne({
		body: post,
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
