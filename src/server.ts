import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(` ${process.env.TESTE_ENV} server is runnnig at 3000`);
});
