import { USER } from "../models/user.models.js";

 const createUser=async(req, res)=>{

    // create api

    try{
        const {name, email, phone, profession}=req.body;

        const newUser=new USER({name, email, phone, profession})

        await newUser.save()
        res.status(200).json({success: true, Message:"User created successfully", newUser});

    }
    catch(error){
        res.status(500).json({success: false, Message: "Internal server error", newUser})
    }

}

// read api
const getUser=async(req,res)=>{
    try {
        const user=await USER.find()

        if(!user)
            {
                return res.status(400).json({success: false, message: "User not found"})
            }
        res.status(200).json({success: true, user});
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

// update user
const updateUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        const updatedUser=await USER.findByIdAndUpdate(userId,req.body, {new:true})

        if(!updatedUser)
            {
                return res.status(404).json({success: false, message: "User nor found"});

            }

        res.status(200).json({success:true, message:"User updated successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: "Internal server error"});
    }
}


// delete user
const deleteUser=async(req, res)=>{
    try{
    const userId=req.params.id;
    const deletedUser=await USER.findByIdAndDelete(userId);
    if(!deletedUser){
        return res.status(404).json({success:false, message:"user not found"});
    }
    return res.status(200).json({success:true, message:"User deleted successfully"});
}

    catch(error)
        {
            return res.status(500).json({success:false, message: "Internal server error"});
        }

}

export{createUser, getUser, updateUser, deleteUser}