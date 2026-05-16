import Razorpay from 'razorpay';
import crypto from 'crypto';
import Transaction from '../models/transaction.model';
import Order from '../models/order.model';

export const createTransaction = async (req, res) => {
 const { amount, userId } = req.body;

 const razorpay = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_SECRET,
 })

 const options = {
  amount: amount,
  currency: "INR",
  receipt: `receipt#${Date.now()}`
 }
 try {
  if (!amount || !userId) {
   return res.status(400).json({
    success: false,
    message: "Amount and user id required"
   })
  }

  //order creation
  const razorpayOrder = await razorpay.orders.create(options);
  res.status(201).json({
   success: true,
   message: "order created successfully",
   key: process.env.RAZOR_PAY_KEY_ID,
   amount: razorpayOrder.amount,
   currency: razorpayOrder.currency,
   order_id: razorpayOrder.id
  })

 } catch (error) {
  console.log("create transaction error - ", error);
  res.status(500).json({
   success: false,
   message: `create transaction error`,
   error: error.message
  })
 }
}


export const createOrder = async (req, res) => {
 const {
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
  userId,
  cartItems,
  deliveryDate,
  address
 } = req.body;

 const key_secret = process.env.RAZOR_PAY_SECRET;

 const generated_signature = crypto.createHmac('sha256', key_secret).update(razorpay_order_id + "|" + razorpay_payment_id).digest('hex')

 if (generated_signature === razorpay_signature) {
  try {
   const transaction = await Transaction.create({
    user: userId,
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    status: "Success",
    amount: cartItems.reduce((total, item) => total + item?.quantity * item.price, 0)
   })

   const order = await Order.create({
    user: userId,
    address,
    deliveryDate,
    items: cartItems?.map((item) => ({
     product: item?._id,
     quantity: item?.quantity
    })),
    status: "Order Placed"
   });
   transaction.order = order._id;
   await transaction.save();
   res.json(201).json({
    success: true,
    message: "Payment verified successfully and order created"
   })

  } catch (error) {
   res.status(500).json({
    status: "Failed",
    message: `create order error`,
    error: error.message
   })
  }
 }

}

export const getOrdersByUserId = async (req, res) => {
 const { userId } = req.params;
 try {
  const orders = await Order.find({ user: userId }).populate("user", "name email").populate("items.product", "name price image_ui ar_uri").sort({ createdAt: -1 })

  if (!orders || orders.length === 0) {
   res.status(404).json({
    success: false,
    message: `No orders are present`,
    error: error.message
   })
  }

  res.status(200).json({
   success: true,
   message: `orders fecthed successfully`,
   orders
  })

 } catch (error) {
  res.status(500).json({
   success: false,
   message: `Failed to get orders`,
   error: error.message
  })
 }
}