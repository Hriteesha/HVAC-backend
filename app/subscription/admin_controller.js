import * as Adminservice from "./admin_service.js"


const create_package =async(req,res)=>{
    try{
        const data = req.body
        const result = await Adminservice.create_package(data)
        res.status(200).send(result)
    }catch(error){
        res.status(400).send(error.message)
    }
}
const get_all_packages = async(req,res)=>{
    try{
        const result = await Adminservice.get_all_packages()
        res.status(200).send(result)
    }catch(error){
        res.status(400).send(error.message)
    }
}

//soft delete package by id
const delete_package =async(req,res)=>{
    try{
        const id = req.params.id
        const result = await Adminservice.delete_package(id)
        res.status(200).send(result)
    }catch(error){
        res.status(400).send(error.message)
    }
}

const update_package =async(req,res)=>{
    try{
        const id = req.params.id
        const data = req.body
        const result = await Adminservice.update_package(id,data)
        res.status(200).send(result)
    }catch(error){
        res.status(400).send(error.message)
    }
}

const get_package_byId =async(req,res)=>{
    try{
        const id = req.params.id
        const result = await Adminservice.get_package(id)
        res.status(200).send(result)
    }catch(error){
        res.status(400).send(error.message)
    }
}
 const restore_package =async(req,res)=>{
    try{
        const id = req.params.id
        const result = await Adminservice.restore_package(id)
        res.status(200).send(result)
    }catch(error){
        res.status(400).send(error.message)
    }
}

export {create_package,get_all_packages,delete_package,update_package,get_package_byId,restore_package}