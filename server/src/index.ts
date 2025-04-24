import express, {Application} from "express";

const app: Application = express();

import authRoutes from '../routes/authRoutes.ts'

app.get("/", authRoutes);

app.listen(3000, () => {
  console.log("I am listening to port 3000");
});
