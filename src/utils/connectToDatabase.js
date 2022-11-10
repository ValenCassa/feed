import clientPromise from './mongoClient';

export const connectToDatabase = async ({ collection }) => {
	const client = await clientPromise;
	const db = client.db('posts');
	const _collection = db.collection(collection);

	return {
		collection: _collection
	};
};
