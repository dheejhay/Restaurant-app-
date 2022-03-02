const mongoose =  require('mongoose')

const menuSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    status: {
        type: String
    },
    remarks: {
        type: String
    }
})

module.exports = mongoose.model('Menu', menuSchema)
