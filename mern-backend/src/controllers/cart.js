const Cart = require('../models/Cart')

exports.addItemToCart = (req, res) => {

    Cart.findOne({ user: req.user._id })
    .exec(( error, cart ) => {
        if(error) return res.status(400).json({ error })
        //Si existe carrito agrandarlo en cantidad
        if(cart) {

            const product = req.body.cartItems.product
            const item = cart.cartItems.find(c => c.product == product)
            let condition, update

            if(item) {
                condition = { "user": req.user._id, "cartItems.product": product }
                update = {
                    '$set': {
                        'cartItems': {
                        ...req.body.cartItems, 
                        quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                }
        } else {  //Si no existe carrito crear uno
            condition = { user: req.user._id }
            update = { 
                '$push': {
                'cartItems': req.body.cartItems
                }
            }

            Cart.findOneAndUpdate(condicion, update)
            .exec((error, cart) => {
                if(error) return res.status(400).json({ error })
                if(cart) return res.status(201).json({ cart: _cart })
            })
        }
        //Si no existe carrito crear uno
     } else {
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