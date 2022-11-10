import { MongoClient } from 'mongodb';

const uri = import.meta.env.VITE_MONGODB_URI;
const client = new MongoClient(uri);
export function startMongoClient() {
	console.log('Starting MongoDB client...');
	return client.connect();
}

export default client.db('posts');
