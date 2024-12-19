import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema=new mongoose.Schema({
      name:{
            type:String,
            required:[true,"please enter your name"],
            minLength:5
      },
      password:{
            type:String,
            required:[true,"Please enter your password"]
      },
      email:{
            type:String,
            unique:[true,"This email already exist"],
            required:[true,"Please enter your email"],
            match:[/^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,}$/,"Please enter valid email "],
            lowercase:true
      },
      userTypes:{
            type:String,
            required:true,
            default:"customer",
            enum:["customer","admin"]//what is enum
      }
},{timestamps:true})


UserSchema.pre('save', function saveUser(next) {
      const user = this;
      const SALT = bcrypt.genSaltSync(9);
      const hashedPassword = bcrypt.hashSync(user.password, SALT);
      user.password = hashedPassword;
      next();
    });


export const User=mongoose.model("User",UserSchema)