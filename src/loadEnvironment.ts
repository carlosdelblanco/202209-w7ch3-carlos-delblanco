import dotenv from "dotenv";
dotenv.config();

const environment = {
  port: process.env.PORT,
  mongoDbUrl: process.env.MONGODB_URL,
  mongoDbDebug: process.env.MONGODB_DEBUG,
  jwtSecret: process.env.JWT_SECRET,
};

export default environment;
