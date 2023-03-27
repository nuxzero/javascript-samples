import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/create", (req, res) => {
  res.json({ message: "Hello World!" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
