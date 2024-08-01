const Product = require("../model/productModel");

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

module.exports = {
  getAllProducts,
  getSearchedProducts,
  getSingleProduct,
  getProductCategory,
};
