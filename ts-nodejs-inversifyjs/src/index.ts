import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import UserService from "./user-service";
import { container } from "./inversify.config";

const app = express();

app.use(helmet());
app.use(cors());

app.get("/user", (req, res) => {
  const service = container.resolve(UserService);
  res.json({ name: service.getUser() });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
