const books = require("../models/Book Model")

exports.getAll = async(req , res) => {
    try{
        let Books = await books.find({})
   
         res.status(200).json({books: Books}) 
         
    }catch(e){
        return res.status(400).json({message:e.message}) 
    }
    
}

exports.getOne = async(req , res) => {
    try{
        let found = await books.findOne({id: req.body.id})
        if(!found){
            return res.status(200).json({message:"sorry! we don't have that book"})
        }
        return res.status(400).json({message:found , Books: Books})

    }catch(e){
        return res.status(400).json({message:"error"})
    }
}

exports.create = async(req , res) => {
    try{
    // console.log(req.body)
    // console.log(req.file.filename)
    req.body.image =req.file.filename;
    await books.create(req.body);
    return res.status(200).json({message:"created"})
} catch(e){
    return res.status(400).json({message:e.message})
}
}


exports.edit = async (req, res) => {
    // try {
    //   await Book.findByIdAndUpdate(req.params.id, req.body);
    //   res.status(200).json({ message: "updated" });
    // } catch (e) {
    //   res.status(400).json({ message: "error" });
    // }
  };
  
  exports.delete = async (req, res) => {
    try {
      await books.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "deleted book", books });
    } catch (e) {
      res.status(400).json({ message: "error" });
    }
  };
  
  

