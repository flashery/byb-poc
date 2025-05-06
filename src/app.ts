import express from "express";
import downloadRoute from "./routes/download.route";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use("/", downloadRoute);

export default app;