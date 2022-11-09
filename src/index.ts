import "./loadEnvironment.js";
import connectToDb from "./database/index.js";
import startServer from "../src/database/index.js";

const mongoUrl = process.env.MONGO_URL;
const port = process.env.PORT;

await startServer(port);
await connectToDb(mongoUrl);
