const Product = require("../model/productModel");

const getAllProducts = async (req, res) => {
  const result = await Product.find().sort({ createAt: -1 });
  res.status(200).json(result);
};

const getSearchedProducts = async (req, res) => {
  const { q } = req.query;
  try {
    let products;
    if (q) {
      products = await Product.find({ name: { $regex: q, $options: "i" } });
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

module.exports = {
  getAllProducts,
  getSearchedProducts,
  getSingleProduct,
};
