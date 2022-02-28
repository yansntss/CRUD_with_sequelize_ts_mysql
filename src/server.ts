import express, { json } from "express";
import { router } from "./routes";
import { db } from "./database/db";

const app = express();

app.use(json()); // identificar o body como json
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log(`server is runnig at 3000`);
});
