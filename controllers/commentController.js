const comments = require("../models/commentModel")

exports.getAll = async(req , res) => {
    try{
        let Comments = await comments.find({})
        return res.status(200).json({comments: Comments}) 
    }catch(e){
        return res.status(400).json({message:e.message}) 
    }
    
}

exports.getOne = async(req , res) => {
    // try{
    //     let found = await books.findOne({id: req.body.id})
    //     if(!found){
    //         return res.status(400).json({message:"sorry! we don't have that book"})
    //     }
    //     return res.status(200).json({message:found})

    // }catch(e){
    //     return res.status(400).json({message:"error"})
    // }
}

exports.create = async(req , res) => {
    try{
// console.log(req.body)
     await comments.create(req.body);
     return res.status(200).json({message:"created"})
} catch(e){
     return res.status(400).json({message:e.message})
}
}


exports.edit = async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "updated" });
    } catch (e) {
      res.status(400).json({ message: "error" });
    }
  };
  
  exports.delete = async (req, res) => {
    // try {
    //   await Book.findByIdAndDelete(req.params.id);
    //   res.status(200).json({ message: "deleted book" });
    // } catch (e) {
    //   res.status(400).json({ message: "error" });
    // }
  };
  