import { User } from "../Schema/userSchema.js";
export const userResository={
      createUser:async function(data){
            const user=await User.create(data)
            return user
      },
      findById:async function(userId){
            const user=await User.findById(userId)
            return user
      },
      updateUser:async function(userId){
            const updatedUser=await User.findByIdAndUpdate(userId,data,{new:true})
            return updatedUser
      },
}