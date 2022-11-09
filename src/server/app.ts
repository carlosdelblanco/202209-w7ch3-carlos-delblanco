import express from "express";
import debugCreator from "debug";
import morgan from "morgan";
import chalk from "chalk";

const app = express();

const debug = debugCreator(`${process.env.DEBUG}`);

const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.green("IT's alive"));
  });
};

app.use(morgan("dev"));
app.use(express.json());

export default startServer;
