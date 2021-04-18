const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");
const User = require("../models/user");

describe("Authentication Endpoints", () => {
   // Clear Users Collection Before Tests Run
   beforeAll(() => {
      User.collection.drop();
   });

   // Close database connection after tests complete
   afterAll(() => {
      mongoose.connection.close();
   });

   it("Register new user", async () => {
      const res = await request(app).post("/api/auth/register").send({
         name: "Test",
         email: "test@gmail.com",
         password: "test1234",
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("token");
   });

   it("Receive Name Error", async () => {
      const res = await request(app).post("/api/auth/register").send({
         email: "test@gmail.com",
         password: "test1234",
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("errors");
      expect(res.body.errors).toHaveProperty("name");
   });
});
