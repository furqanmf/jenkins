/**
 * Service talks to the database (data layer)
 */
import { fetchProducts } from '../services/products.cjs';

const getProducts = (req, res) => {
    res.json(fetchProducts());
};

export {
    fetchProducts
};


const products = require('../data/products');

const fetchProducts = () => products;

module.exports = {
    fetchProducts
};