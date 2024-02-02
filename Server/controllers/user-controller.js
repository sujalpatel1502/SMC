
import User from "../model/user-schema.js";
import Jwt  from "jsonwebtoken";
// import Product from "../model/product.js";
const JWT_SECRET="ndfvgtdyurhdvfgtioylgkevchopfitnjrhfnjhsawiuhggyy";

 export const usersignup= async(request,response)=>{
    console.log("req",request.body);
    try {
        const exists=await User.findOne({email:request.body.email});
        if(exists){
            return response.status(401).json({message:'username already exist'})
        }

        const user=request.body;
        console.log(user);
        const newUser= new User(user);
       await newUser.save();
       response.status(200).json({message:user})
    } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr whil signup",error);
       response.status(500).json({message:error.message})

    }
}
export const userlogin= async(request,response)=>{
    try {
        const email=request.body.email;
        const password=request.body.password;
       let user= await User.findOne({email:email,password:password})
       if(user){
        // return response.status(200).json(`${email} login sucessfull`)
        const token=Jwt.sign({email:email},JWT_SECRET);
        if(response.status(201)){
            return response.send({status:"ok",data:token})
        }else{
            return response.send({error:"error"})
        }
       }else{
        return response.status(401).json("invalid request")
       }
    } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr whil login",error);
       response.status(500).json({message:error.message})

    }
    console.log("hiiii");
}



export const userdata=async(request,response)=>{
    const {token}=request.body;
    try {
        const user=Jwt.verify(token,JWT_SECRET)
        const useremail=user.email;

        User.findOne({email:useremail}).then((data)=>{
            return response.send({status:"ok",data:data})
        })
    } catch (error) {
        return response.send({error:error})
    }
}





