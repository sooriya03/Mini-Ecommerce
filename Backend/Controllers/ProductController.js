const productModel = require('../Models/ProductModel')

// GET API for fetching Products api/v1/product
exports.getProducts = async (req,res,next) => {

    const query = req.query.keyword?{ name: {
        $regex: req.query.keyword,
        $options: 'i'
    
    }}:{}

    const products = await productModel.find(query)

    res.json({
        success: true,
        products,
        message: 'Get products working!'
    })
}

//GET API for fetching Single Product api/v1/product/:id
exports.getSingleProduct = async (req,res,next) => {

    try{
        const singleProduct = await productModel.findById(req.params.id)
        
        res.json({
            success: true,
            singleProduct,
            message: 'Get single product working!'
        })
    }catch(error){
        res.status(404).json({
            success: false,
            message: 'Unable to fetch with that ID'
        })

    }
    

}

