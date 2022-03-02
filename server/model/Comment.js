//Requiring mongoose package
const mongoose=require('mongoose');


// Schema
var commentSchema = new mongoose.Schema({
	fullName : String,
	email:String,
	comment:String
});

module.exports=mongoose.model("Comment", commentSchema);