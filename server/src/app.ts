import express, { Application, Request, Response, NextFunction } from "express";
import { compiler } from "./middlewares/compileData";

const app: Application = express();

import appRoute from "./routes";

// Settings
app.set("port", 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compiler);

// Headers response
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With,Content-Type, Accept"
  );
  res.header("Access-Controll-Allow-Methods", "OPTIONS,GET, POST, PUT, DELETE");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

// Route
app.use(appRoute);
export default app;
