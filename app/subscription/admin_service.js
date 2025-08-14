import {packagesmodel} from "./model.js"


const create_package = async(data) => {
    const{ package_name, price, description, service_per_year, servicesincluded } = data
    const existing = await packagesmodel.findOne({package_name})
    if(existing) throw new Error("Package Already Exists")
    const result = await packagesmodel.create({
        package_name,
        price,
        description,
        service_per_year,
        servicesincluded
    })
    return result
}

const get_all_packages = async() => {
    const result = await packagesmodel.find()
    return result
}

const get_package = async(id) => {
    const result = await packagesmodel.findById(id)
    return result
}

const update_package = async(id,data) => {
    const result = await packagesmodel.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    return result
}
//soft delete
const delete_package = async(id) => {
    const result = await packagesmodel.findById(id)
    if(!result) throw new Error("Package doesn't exist")
    if(result.isDeleted === true) return {message:"Package was already deleted"}
    result.isDeleted = true
    await result.save()
    return {message:"Package deleted successfully"}
}

const restore_package = async(id) => {
    const result = await packagesmodel.findById(id)
    if(!result) throw new Error("Package doesn't exist")
    if(!result.isDeleted) return {message:"Package is already active"}
    result.isDeleted = false
    await result.save()
    return {message:"Package restored successfully"}
}
    

export {create_package,get_all_packages,get_package,update_package,delete_package,restore_package}