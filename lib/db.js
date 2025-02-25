import { MongoClient } from "mongodb"

const isProduction = process.env.NODE_ENV === "production"

const dbName = process.env.NEXT_PRIVATE_DB_NAME
const uri = process.env.NEXT_PRIVATE_DB_URI
const options = {}

if (!dbName || !uri)
  throw new Error('Invalid/Missing environment variable: "NEXT_PRIVATE_DB_URI"')

let client
let clientPromise

if (!isProduction) {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default (await clientPromise).db(dbName)
