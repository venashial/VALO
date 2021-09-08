import { MongoClient } from 'mongodb'

const client = new MongoClient(import.meta.env.VITE_MONGO_URL);

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(request) {
  await client.connect();

  const db = client.db('valo');

  const collection = db.collection('origins');

  const origins = await collection.find({}).toArray();

  client.close()

  return {
    body: origins,
  };
}