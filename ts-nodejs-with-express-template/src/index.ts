import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());

const API_PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/create", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(API_PORT, () => {
  console.log(`Listening on port ${API_PORT}`);
});
