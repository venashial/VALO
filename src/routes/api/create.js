import { MongoClient } from 'mongodb'

import { makeId } from '$lib/id.js';
import { editableOrigin } from '$lib/schemas.js';

const client = new MongoClient(import.meta.env.VITE_MONGO_URL);

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function post(request) {
  await client.connect();

  const db = client.db('valo');

  const collection = db.collection('origins');

  const origin = request.body;

  const errors = editableOrigin.validate(origin);

  if (errors.length > 0) {
    return {
      status: 400,
      body: { message: errors.toString() },
    };
  }

  for (let i = 0; i < 1000; i++) {
    const tempId = makeId(3);

    if ((await collection.find({ id: tempId }).toArray() ).length === 0) {
      origin.id = tempId;
      break;
    }
  }

  if (!origin.id) {
    throw new Error('Could not generate unique id');
  }

  origin.timestamps = { created: (new Date()).toISOString() };

  origin.visits = 0;

  await collection.insertOne(origin);

  client.close()

  return {
    status: 200,
  }
}