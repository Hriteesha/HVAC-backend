import e from "express"
import * as userservice from "./service.js"

const register_user = async(req,res) =>{
    try{
        const data= req.body
        const result = await userservice.register_user(data)
        res.send(result)
    }catch(error){
        res.send(error.message)
    }
    }

const login = async(req,res) =>{
        try{
            const data= req.body
            const result = await userservice.login(data)
            res.status(200).json(result)
        }catch(error){
            res.status(400).json({ error: error.message });
        }
        }

export {register_user,login}
