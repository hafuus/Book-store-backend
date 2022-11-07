const books = require("../models/Book Model")

exports.getAll = async(req , res) => {
    try{
      let Books
      if(req.query.search){
         Books = await books.find({title: req.query.search})
      }else{
      Books = await books.find({})
        }
   
         res.status(200).json({books: Books}) 
         
    }catch(e){
        return res.status(400).json({message:e.message}) 
    }
    
}

exports.search = async(req , res) => {
    try{
        console.log(req.body)
        // let found = await books.find({title:req.body.title})
         let found = await books.findOne({title:req.body.title}).populate({
          path : "Book", 
          select :  "title"
         });
        // if(!found){
        //     return res.status(400).json({message:"sorry! we don't have that book"})
        // }
        console.log(found);

        return res.status(200).json({Books: found})

    }catch(e){
        return res.status(400).json({message:e.message})
    }
}

exports.create = async(req , res) => {
    try{

    // console.log(req.body)
    req.body.image =req.file.filename;
    await books.create(req.body);
    return res.status(200).json({message:"created"})
} catch(e){
    return res.status(400).json({message:e.message})
}
}


exports.edit = async (req, res) => {
    try {
      // req.body.image =req.file.filename;
      const updated = await books.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).json({ message: "updated" , updated });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      let deleted = await books.findByIdAndDelete(req.params.id);
      // console.log(Books)
      res.status(200).json({ message: "deleted book", deleted });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };
  
  

