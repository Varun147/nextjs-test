import db from "./db"

const collection = (collectionName) => db.collection(collectionName)

export default collection
