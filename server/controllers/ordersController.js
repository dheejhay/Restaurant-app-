require('../model/mongooseConnection')

const Order = require('../model/Order');
const Menu = require('../model/Menu');

exports.order = async(req, res) => {
const order = await Order.find({}).populate('menu')
    res.render('orders/index', {title: 'order', order})
}

exports.add = async(req, res) => {
   const menu = await Menu.findById(req.params.menu_id).populate('menu')
    res.render('orders/add', {title: 'order', menu})
}

exports.save = async(req, res) => {
    const id = req.params.menu_id
    const menu = await Menu.findById(id)
    const order = new Order({
        customer:req.body.customer,
        menu:id,
        order_date: Date.now(),
        cost:menu.price,
        paid:0,
        status:0
    })
    await order.save()
    res.render('orders/add', {title: 'order', menu})
}

exports.edit = async(req, res) => {
    const id = req.params.menu_id
    const menu = await Menu.findById(id)
    res.render('orders/index', {title: 'order', menu})
}

exports.update = async(req, res) => {
    const id = req.params.menu_id
    const order = await Order.updateOne({_id: id}, {
        customer:req.body.customer,
        menu:id,
        order_date: Date.now(),
        cost:menu.price,
        paid:0,
        status:0 
    })
    res.redirect(302, '/orders')
}

exports.getOrderDelete = async(req, res) => {
    const id = req.params.menu_id

}