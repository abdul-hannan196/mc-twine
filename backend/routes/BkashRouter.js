import express from "express";
import bkashConfig from "../config/BKash.js";
import { createPayment, executePayment } from "bkash-payment";
import orderModel from "../models/orderModel.js";
const BkashRouter = express.Router();

BkashRouter.post("/bkash-checkout", async (req, res) => {
  try {
    const { amount, callbackURL, orderID, reference, orderData } = req.body;
    const paymentDetails = {
      amount: amount || 10, // your product price
      callbackURL: callbackURL || "http://127.0.0.1:3000/api/bkash-callback", // your callback route
      orderID: orderID || "Order_101", // your orderID
      reference: reference || "1", // your reference
    };
    const result = await createPayment(bkashConfig, paymentDetails);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

  //   const { address } = req.body;
  //   console.log(address);
  //   res.json({ success: true });
});

BkashRouter.get("/bkash-callback", async (req, res) => {
  try {
    const { status, paymentID } = req.query;
    let result;
    let response = {
      statusCode: "4000",
      statusMessage: "Payment Failed",
    };
    if (status === "success")
      result = await executePayment(bkashConfig, paymentID);

    if (result?.transactionStatus === "Completed") {
      // payment success
      // insert result in your db
      //       var SaveUserItmes = await orderModel.create({
      //         userId: '',
      //         items: [],
      //         amount: ,
      //         address: ,
      //         status: ,
      //         paymentMethod:,
      //         payment: ,
      //       });
    }
    if (result)
      response = {
        statusCode: result?.statusCode,
        statusMessage: result?.statusMessage,
      };
    // You may use here WebSocket, server-sent events, or other methods to notify your client
    res.redirect("http://localhost:5173");
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
});

BkashRouter.get("/", (req, res) => {
  res.json({ success: true });
});

export default BkashRouter;
