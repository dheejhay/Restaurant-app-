require('../model/mongooseConnection')
const Comment = require('../model/Comment');

exports.home = async (req, res) => {

        res.render('pages/index')
}

exports.about = async (req, res) => {
        const comments = await Comment.find({})
        res.render('pages/about', {title: 'comments', comments})

}


exports.contact = async (req, res) => {

        res.render('pages/contact')
}