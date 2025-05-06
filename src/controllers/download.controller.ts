import { Request, Response } from "express";
import path from "path";
import { DownloadTokenPayload, verifyDownloadToken } from "../utils/token";
import { validateDownload } from "../services/download.service";

/**
 * Controller for downloading a secure PDF file
 */
export function downloadReport(req: Request, res: Response): void {
    try {
        const token: string = req.params.token;
        if (!token) {
            res.status(400).json({ error: "Token is required" });
            return;
        }

        const propertyName: string = req.query.propertyName as string;
        const { userId }: DownloadTokenPayload = verifyDownloadToken(token);

        const fileName = validateDownload(userId, propertyName);
        const filePath = path.resolve(__dirname, "../../assets", fileName);

        res.download(filePath, (err) => {
            if (err) {
                console.error("Download error:", err);
                res.status(500).send("Failed to download report.");
            }
        });
    } catch (err) {
        console.error("Download access error:", err);
         res.status(403).json({ error: "Invalid or expired download link" });
         return;
    }
}
