import express from "express";
import debugCreator from "debug";
import morgan from "morgan";
import chalk from "chalk";
import { endPointUnknown } from "./middleware/errors";

const app = express();

const debug = debugCreator(`${process.env.DEBUG}`);

const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.green("It's alive"));
  });
};

app.use(morgan("dev"));
app.use(express.json());
app.use(endPointUnknown);

export default startServer;
