require('../model/mongooseConnection');

const Menu = require('../model/Menu');

exports.menu = async(req, res) => {
const menus = await Menu.find({})
    res.render('menus/index', {title: 'menu', menus})
}

exports.add = async(req, res) => {

    res.render('menus/add', {title: 'menu'})
}

exports.save = async (req, res) => {
    const menu = new Menu ({
        name:req.body.name,
		price:req.body.price,
		status:req.body.status,
        remarks:req.body.remarks
    });
    menu.save()
    res.render('menus/add', { title: 'menu'})
}

exports.edit = async (req, res) => {
    const id = req.params.menu_id
    const menu = await Menu.findById(id);
    res.render('menus/edit', { title: 'edit', menu}) 
}

exports.update = async (req,res) => {
    const id = req.params.menu_id
    const menu = await Menu.updateOne({_id:id},
        {
            name:req.body.name,
            price:req.body.price,
            status:req.body.status,
            remarks:req.body.remarks
        })
    res.redirect(302, '/menus') 
}

exports.getDelete = async(req, res) => {
    res.render('menus/delete', {title: 'delete'})
}

exports.postDelete =async(req, res) => {
    const id = req.params.menu_id
    const menu = await Menu.deleteOne({_id:id})
    res.redirect(302, '/menus')
}