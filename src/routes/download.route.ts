import { Router } from "express";
import { downloadReport } from "../controllers/download.controller";

const router = Router();

router.get("/download/:token", downloadReport);

export default router;