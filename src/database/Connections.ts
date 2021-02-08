import mongoose from 'mongoose';
require('dotenv').config();

export default class DatabaseConnection {
  constructor() {}

  connect() {
    mongoose
      .connect(`mongodb+srv://developer:${process.env.DB_PASSWORD}@gogoo-mongo.e9ray.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('connected to db..');
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  }
}
