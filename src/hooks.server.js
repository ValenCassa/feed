import { startMongoClient } from './utils/mongoClient';

startMongoClient().then(() => {
	console.log('MongoDB client started!');
});
