const bookmarkModel = require("../models/BookmarkModel");
const bookmark = require("../models/BookmarkModel")

exports.getAll = async(req , res) => {
    try{
       
        let bookmarks = await bookmark.find({})
        return res.status(200).json({bookmark: bookmarks}) 
    }catch(e){
        return res.status(400).json({message:e.message}) 
    }
    
}

exports.create = async(req , res) => {
    try{
      // console.log(req.user)
      await bookmark.create({Book:req.body.Book,User:req.user});
    return res.status(200).json({message:"created bookmark"})
} catch(e){
     return res.status(400).json({message:e.message})
}
}

  
  exports.delete = async (req, res) => {
    try {
      await bookmark.findOneAndDelete(req.body.Book);
      console.log(req.user)
      res.status(200).json({ message: "deleted book" , bookmark });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };
  