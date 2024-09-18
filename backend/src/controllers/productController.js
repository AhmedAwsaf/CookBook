const Product = require("../model/productModel");

const Order = require('../model/billingInfoModel'); 
const User = require('../model/User'); 

const getAllProducts = async (req, res) => {
  const result = await Product.find().sort({ createAt: -1 });
  res.status(200).json(result);
};
const getSearchedProducts = async (req, res) => {
  const { name } = req.params;
  try {
    let products;
    if (name) {
      products = await Product.find({ name: { $regex: name, $options: "i" } });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "No products found!" });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Item.findById(id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "No product found" });
  }
};

const getProductCategory = async (req, res) => {
  const { category } = req.params;
  console.log(`Fetching data for category: ${category}`);

  try {
    const products =
      category === "fish_and_meat"
        ? await Product.find({ category: "Fish and Meat" })
        : await Product.find({ category });
    console.log(`Products found: ${products.length}`);
    if (products.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const postCartBill = async(req, res) => {
  try {
    const { cart, address, payment, phoneNumber, otp, cardInfo,delivery } = req.body;
    const userId = req.user.id;
    const paymentMethod = payment.method;

    if (!paymentMethod) {
      return res.status(400).json({ error: "Payment method is required" });
    }

    const paymentDetails = {
      method: paymentMethod,
      phoneNumber: paymentMethod === "Bkash" || paymentMethod === "Nagad" ? phoneNumber : undefined,
      otp: paymentMethod === "Bkash" || paymentMethod === "Nagad" ? otp : undefined,
      cardNumber: paymentMethod === "Visa" || paymentMethod === "Mastercard" ? cardInfo?.number : undefined,
      cardExpiry: paymentMethod === "Visa" || paymentMethod === "Mastercard" ? cardInfo?.expiry : undefined,
      cardCvv: paymentMethod === "Visa" || paymentMethod === "Mastercard" ? cardInfo?.cvv : undefined
    };

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "Your cart is empty" });
    }

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const vat = subtotal * 0.05;
    const deliveryFee = address.insideDhaka ? 40 : 120;
    const totalAmount = subtotal + vat + deliveryFee;

    const orderedItems = await Promise.all(
      cart.map(async (cartItem) => {
        const product = await Product.findById(cartItem.product);
        if (!product) {
          throw new Error(`Product with ID ${cartItem.product} not found.`);
        }
        return {
          product: cartItem.product,
          quantity: cartItem.quantity,
          price: product.price,
        };
      })
    );

    const order = new Order({
      user: userId,
      items: orderedItems,
      subtotal,
      vat,
      deliveryFee,
      totalAmount,
      address,
      payment: paymentDetails,
      delivery: { status: delivery.status,remarks:delivery.remarks }
    });

    await order.save();

    return res.status(201).json({
      message: 'Order placed successfully',
      order: order,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while placing the order' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').exec();
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id).populate('user').exec();

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, message: "Order deleted successfully", order: deletedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};




module.exports = {
  getAllProducts,
  getSearchedProducts,
  getSingleProduct,
  getProductCategory,
  postCartBill,

  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
};

