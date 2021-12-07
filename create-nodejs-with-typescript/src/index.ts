import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 8080;
const hostname = "0.0.0.0";

app.get("/", (_, res) => {
  res.send({
    message: "hello world",
  });
});

app.listen(PORT, hostname, () =>
  console.log(`server is running on port http://localhost:${PORT}`)
);
