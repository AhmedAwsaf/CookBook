const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productController");

router.get("/", (req, res) => res.send("All products parent route"));
router.get("/all-products", ProductController.getAllProducts);
router.get("/products", ProductController.getSearchedProducts);
router.get("/products/:id", ProductController.getSingleProduct);

module.exports = router;
