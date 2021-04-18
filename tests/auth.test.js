const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");

describe("Authentication Endpoints", () => {
   afterAll(() => {
      mongoose.connection.close();
   });

   test("Register new user", async () => {
      const res = await request(app).post("/api/auth/register").send({
         name: "Test",
         email: "test@gmail.com",
         password: "test1234",
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("token");
   });

   test("Receive Name Error", async () => {
      const res = await request(app).post("/api/auth/register").send({
         email: "test@gmail.com",
         password: "test1234",
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("errors");
      expect(res.body.errors).toHaveProperty("name");
   });
});
