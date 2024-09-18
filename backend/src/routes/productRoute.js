const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productController");
const verifyToken = require("../controllers/middleware/authMiddleware");

router.get("/", (req, res) => res.send("All products parent route"));
router.get("/all-products", ProductController.getAllProducts);
router.get("/products/search/:name", ProductController.getSearchedProducts);
router.get("/products/single/:id", ProductController.getSingleProduct);
router.get("/products/:category", ProductController.getProductCategory);

router.post("/billing", verifyToken, ProductController.postCartBill);
router.get('/orders',verifyToken, ProductController.getAllOrders);
router.get('/orders/:id', verifyToken,ProductController.getOrderById);
router.put('/orders/:id', verifyToken,ProductController.updateOrder);
router.delete('/orders/:id', verifyToken,ProductController.deleteOrder);

module.exports = router;
