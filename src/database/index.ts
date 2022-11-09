import "../loadEnvironment";
import mongoose from "mongoose";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator(`${process.env.DEBUG}`);

export const connectToDb = async (url: string) => {
  try {
    await mongoose.connect(url, { dbName: "w7ch3" });
    debug(chalk.green("Connect to w7ch2 database"));
  } catch {
    debug(chalk.red("Error to connect to Database"));
  }
};

export default connectToDb;
