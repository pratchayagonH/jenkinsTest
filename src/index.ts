import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("listenin port: " + port);
});
