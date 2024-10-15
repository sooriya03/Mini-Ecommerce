const OrderModel = require('../Models/OrderModel')
const productModel = require('../Models/ProductModel')

//POST API for Creating Order api/v1/order
exports.createOrder = async (req,res,next) => {

    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item) => (acc + item.singleProduct.price * item.qty),0)).toFixed(2)
    const status = 'Pending'
    const order = await OrderModel.create({cartItems,amount,status})

    cartItems.forEach(async(item) => {
        const product = await productModel.findById(item.singleProduct._id);
        product.stock = product.stock - item.qty;
        await product.save()
        
    });

    res.json({
        success: true,
        order,
        message: 'Order works!!!'
    })
}

