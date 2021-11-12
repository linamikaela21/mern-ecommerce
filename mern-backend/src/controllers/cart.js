const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {

    Cart.findOne({ user: req.user._id })
    .exec(( error, cart ) => {
        if(error) return res.status(400).json({ error })
        //Si existe carrito agrandarlo en cantidad
        if(cart) {
            Cart.findOneAndUpdate({ user: req.user._id }, {
                '$push': {
                    'cartItems': req.body.cartItems
                }
            })
            exec((error, cart) => {
                if(error) res.status(400).json({ error })
                if(cart) res.status(201).json({ cart: _cart })
            })

        }
        //Si no existe carrito crear uno
        else {
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            })
        
            cart.save((error, cart) => {
                if(error) res.status(400).json({ error })
                if(cart) res.status(201).json({ cart })
            })
        }
    })

}