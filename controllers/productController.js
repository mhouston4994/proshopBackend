import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all Products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

// Fetch single Products
// GET /api/products/:id
// Public
const getProductsById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
})

export {
	getProducts,
	getProductsById
}