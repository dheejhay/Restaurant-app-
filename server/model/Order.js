const mongoose =  require('mongoose')

const orderSchema = new mongoose.Schema({
    customer: {
        type: String
    },
    menu: {
        type: mongoose.Schema.Types.ObjectId, ref : 'Menu'
    },
    cost: {
        type: Number
    },
    order_date: {
        type: Date
    },
    paid: {
        type: Boolean
    },
    status: {
        type: Boolean
    }
})

module.exports = mongoose.model('Order', orderSchema)
