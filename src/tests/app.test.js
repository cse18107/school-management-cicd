
import app from '../../app.js';
import supertest from 'supertest';

const request = supertest(app);

describe("sample test endpoint", () => {
    test("should return response on ping", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
});
