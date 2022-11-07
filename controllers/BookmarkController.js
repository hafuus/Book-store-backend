const bookmarkModel = require("../models/BookmarkModel");
const bookmark = require("../models/BookmarkModel")


exports.create = async(req , res) => {
    try{
     const save =  await bookmark.create({Book:req.body.Book,User:req.user});
     console.log(req.user)
    return res.status(200).json({message:"created bookmark" , save})
} catch(e){
     return res.status(400).json({message:e.message})
}
}

exports.getAll = async(req , res) => {
  try{
      // let bookmarks = await bookmark.find({}).populate({
      //   path: "BookMarks" ,
      //   options: {strictPopulate: false},
      //   // select: "Book"
      // })
      let bookmarks = await bookmark.find({}).populate("Book")
      //  console.log(bookmarks)
      return res.status(200).json({save:bookmarks.length ,bookmarks}) 
  }catch(e){
      return res.status(400).json({message:e.message}) 
  }
  
}

  exports.delete = async (req, res) => {
    try {
      await bookmark.findOneAndDelete(req.body.Book);
      return res.status(200).json({ message: "deleted book" , bookmark });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };
  