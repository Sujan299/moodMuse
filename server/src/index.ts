import express, {Application} from "express";
const app: Application = express();
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes'
import journalRoutes from './routes/journalRoutes'
dotenv.config()
app.use(express.json());
app.use("/", authRoutes);

app.use("/home", journalRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`I am running on port: ${PORT}`);
});
