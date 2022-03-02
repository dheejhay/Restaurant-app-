require('../model/mongooseConnection')


const Comment = require('../model/Comment')

exports.add = async (req, res) => {

    res.render('comments/add')
}

exports.save = async (req, res) => {
    const comment = new Comment({
        fullName: req.body.fullName,
        email: req.body.email,
        comment: req.body.comment
    });

    comment.save()
    res.redirect('pages/feedback');
}

exports.edit = async (req, res) => {
    const id = req.params.comment_id
    const comment = await Comment.findById(id)
    res.render('comments/edit', {title: 'edit',comment})
}

exports.update = async (req, res) => {
    const id = req.params.comment_id
    const comment = await Comment.updateOne({
        _id: id
    }, {
        fullName: req.body.fullName,
        email: req.body.email,
        comment: req.body.comment
    })
    res.redirect(302, '/comments')
}