const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

  export const connect = async (collection) => {
  const dbName = process.env.DATABASE_NAME;

  await client.connect();   // important

  return client.db(dbName).collection(collection);
};