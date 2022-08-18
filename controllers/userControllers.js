const users = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

exports.signUp = async(req, res) => {
    try{
        let checkEmail = await users.findOne({email:req.body.email})
        if (checkEmail != null){
            return res.status(200).json({message: "email is already exist"})
        }
        if (req.body.password!== req.body.confirmPassword){
            return res.status(200).json({message: "wrong email or password"})
        }
        if (req.body.password.length < 7){
            return res.status(200).json({message: "short password"})
        }
        const saltRounds = 10;
        let passsword = req.body.password
        let hashed = await bcrypt.hash(passsword, saltRounds);

        const token = await jwt.sign({
          data: {email:req.body.email},
          expiresIn: "1h"
        },
        process.env.JWTSECRET);
        console.log(token)

        await users.create(req.body)
        return res.status(200).json({message: "created" , token})
        
    }catch(e){
        return res.status(200).json({message: e.message})
    }
};
exports.logIn = async(req , res)=>{
  try{
      let found = await users.findOne({email:req.body.email})
      let user = await users.bcrypt.compare(req.body.password, found.password);
      if (!found){
          return res.status(200).json({message: "email doesn't exist"})
      }
      if (user==false){
          return res.status(200).json({message: "wrong email or password"})
      }
      
          return res.status(200).json({message: "login success"})
      
  
  }catch(e){
      return res.status(200).json({message: "error"})
      console.log(e.message)
  }
}
  

exports.getUsers = async(req, res) => {
  try{
    let findUsers = await users.find({});
    console.log(findUsers)
   res.status(200).json({ data: findUsers });
 }catch(e){
  res.status(200).json({ message: e.message });
}
}

// exports.changeName = async(req , res)=>{
//   try{
//     //1.checking the name
//     let checkingName = await users.findOne({name:req.body.name})
//    if (!checkingName){
//       return res.status(200).json({message:"the account doesnt exist"})
//    }
//    //2. oldName === newName
//    let compare = await users.compare(req.body.oldName , checkingName.oldName)
//    if (compare == true){
//       return res.status(200).json({message:"the name still the same"})
//    }
//   //3. Update database
//   let updated = await users.findOneAndUpdate({email:req.body.email , checkingName:name})
//   return res.status(200).json({message:"name changed"})   
//   }catch(e){
//       return res.status(200).json({message:e.message})
//   }
// }

exports.changePassword = async(req , res)=>{
  try{
// 1. Check email exists
   let checkingEmail = await users.findOne({email:req.body.email})
   if (!checkingEmail){
      return res.status(200).json({message:"email doesnt exist"})
   }
   //2. oldpassword === hashed inside database
   let compare = await users.bcrypt.compare(req.body.oldPsssword , checkingEmail.oldPasssword)
   if (compare == false){
      return res.status(200).json({message:"email doesn't exist"})
   }
    //3. newPassword === confirmNewPassword
    if (req.body.passsword !== confirmNewPasssword){
      return res.status(200).json({message:"email or password wrong"})
    }
     //4. new password length > 7
     if(req.body.password.length < 7 ){
      return res.status(200).json({message:"short password"})
     }
      //5. newPassword !== oldpassword
    if(req.body.oldPsssword === req.body.confirmNewPasssword){
      return res.status(200).json({message:"new password cannot be the same as old"})
  }
  //6. Update database
  let hashed = await users.bcrypt.hash(req.body.newPassword , 10)
  let updated = await users.findOneAndUpdate({email:req.body.email , password:hashed})
  return res.status(200).json({message:"password changed"})   
  }catch(e){
      return res.status(200).json({message:e.message})
  }
}
