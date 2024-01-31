
import User from "../model/user-schema.js";

// import Product from "../model/product.js";

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
        return response.status(200).json(`${email} login sucessfull`)
       }else{
        return response.status(401).json("invalid request")
       }
    } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr whil login",error);
       response.status(500).json({message:error.message})

    }
    console.log("hiiii");
}





