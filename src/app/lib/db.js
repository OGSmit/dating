import mongoose from "mongoose";

/*global.mongoose = {
  conn: null,
  promise: null,
};*/

export async function dbConnect() {
  try {
    if (global.mongoose && global.mongoose.conn) {
      return global.mongoose.conn;
    } else {
      const conString = 'mongodb+srv://jackkerouac1613:R8QL3SXaGJpmBO9y@tinder.smyb7tb.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=Tinder';

      const promise = mongoose.connect(conString, {
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };

      return await promise;
    }
  } catch (error) {
    throw new Error("Database connection failed");
  }
}

export const disconnect = () => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};