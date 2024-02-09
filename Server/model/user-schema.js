import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        trim:true,
        unique:true,
        
        
    },
    wing:{
        type:String,
        trim:true,
        lowercase:true
    },
    flatNumber:{
        type:Number,
        trim:true,
        unique:true,
    }

   
});


const User=mongoose.model('user',userSchema);

export default User;