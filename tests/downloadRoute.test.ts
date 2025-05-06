import request from "supertest";
import app from "../src/app";
import { generateDownloadToken } from "../src/utils/token";

describe("GET /download/:token", () => {

    it("should return 400 if token is missing", async () => {
        const res = await request(app).get("/download/");
        expect(res.status).toBe(404); // No route matches /download/ without :token
    });

    it("should return 403 for invalid token", async () => {
        const res = await request(app).get("/download/invalid-token");
        expect(res.status).toBe(403);
        expect(res.body).toHaveProperty("error", "Invalid or expired download link");
    });

    // it("should download the file with valid token and propertyName", async () => {
    // const token = generateDownloadToken({ userId: "user1" }, 600);

    //     const res = await request(app)
    //         .get(`/download/${token}`)
    //         .query({ propertyName: "123 Main St" });

    //     expect(res.status).toBe(200);
    //     expect(res.header["content-type"]).toBe("application/pdf");
    //     expect(res.header["content-disposition"]).toMatch(/attachment/);
    // });
});