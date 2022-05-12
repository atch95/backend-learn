// assuming mongoose@6.x
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongoServer = await MongoMemoryServer.create();

(async () => {
  const result = await mongoose.connect(mongoServer.getUri(), {
    dbName: "myProject",
  });

  console.log(result.connection.port);
  // your code here

  // await mongoose.disconnect();
})();
