
const { query } = require('express')
const Product = require('../models/product')


const getAllProductsStatic = async (req, res) =>  {
    const products = await Product.find({
        featured : true,
        name: "vase table"
    })
    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts = async (req, res) => {
    const {featured, company} = req.query
    const qureyObject =  {}
    if (featured){
        queryObject.featured = featured === 'true' ? true : false 
    }
    if (company){
        queryObject.company = company 
    }
    console.log(queryObject) 
    const products = await Product.find(req.query)
    console.log(req.query);
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}