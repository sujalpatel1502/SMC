import mongoose from "mongoose";

 export const Connection=async(username,password)=>{
  
    const URL=`mongodb+srv://${username}:${password}@cluster0.wjiuerc.mongodb.net/?retryWrites=true&w=majority`;
    try {
      await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true}) 
      console.log("database connectedsucessfullyyyyy");
    } catch (error) {
       console.log("error while connecting db",error); 
    }
}


