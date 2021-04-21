const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");
const BankAccount = require("../models/bankaccount");

describe("Bank Account Endpoints", () => {
   // User Token For Authorization Header
   let token = "";

   // Bank Account ID for certain tests
   let bankAccountID = "";

   // Clear Bank Account Collection Before Running Tests
   beforeAll(async () => {
      BankAccount.collection.drop();
      const res = await request(app).post("/api/auth/register").send({
         name: "Test",
         email: "test@gmail.com",
         password: "test1234",
      });
      token = res.body.token;
   });

   // Close database connection after tests complete
   afterAll(() => {
      mongoose.connection.close();
   });

   it("Create Bank Account", async () => {
      const res = await request(app)
         .post("/api/bankaccounts/create")
         .set("Authorization", `Bearer ${token}`)
         .send({
            name: "Test Account",
            type: "savings",
            balance: 5000,
            lowBalanceAlert: 1000,
         });
      bankAccountID = res.body._id;
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
   });

   it("Gets All Bank Accounts", async () => {
      const res = await request(app)
         .get("/api/bankaccounts")
         .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThan(0);
   });
});
