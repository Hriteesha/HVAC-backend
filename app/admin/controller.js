import * as Adminservice from "./service.js"

const create_admin = async (req,res)=>{
    try {
        const data = req.body
        const result = await Adminservice.create_admin(data)
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }}

const login_admin= async (req,res) =>{
    try{
        const data = req.body
        const result = await Adminservice.login_admin(data)
        res.send(result)
    }catch(error){
        res.send(error.message)
    }
    }

const get_admin_byId =async(req,res)=>{
    try{
        const id = req.params.id
        const result = await Adminservice.get_admin(id)
        res.send(result)
    }catch(error){
        res.send(error.message)
    }
}

const get_all_admin =async(req,res)=>{
    try{
        const result = await Adminservice.get_all_admin()
        res.send(result)
    }catch(error){
        res.send(error.message)
    }
}

const update_admin =async(req,res)=>{
    try{
        const id = req.params.id
        const data = req.body
        const result = await Adminservice.update_admin(id,data)
        res.send(result)
    }catch(error){
        res.send(error.message)
    }
}

const delete_admin =async(req,res)=>{
    try{
        const id = req.params.id
        const result = await Adminservice.delete_admin(id)
        res.send(result)
    }catch(error){
        res.send(error.message)
    }
}

const restore_admin = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Adminservice.restore_admin(id);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

export {create_admin,login_admin,get_admin_byId,get_all_admin,update_admin,delete_admin,restore_admin}