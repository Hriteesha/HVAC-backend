import * as profileService from "./service.js";

export const getProfile = async (req, res) => {
    try{const id = req.params.id;
    const profile = await profileService.get_profile(id);
    res.send(profile);
}
catch(error){
    res.send(error.message)
}
};

export const updateProfile = async (req, res) => {
   try{
    const id = req.params.id;
    const data = req.body;
    console.log(data)
    const profile = await profileService.update_profile(id, data);
    res.send(profile);
   }catch(error){
    res.send(error.message)
   }
};

export const delete_profile = async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await profileService.delete_profile(id);
        res.send(result);
    }catch(error){
        res.send(error.message)
    }
};