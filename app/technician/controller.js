import * as Technicianservice from "./service.js"

export const create_technician = async (req, res) => {
    try{
    const data = req.body;
    const result = await Technicianservice.create_technician(data);
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

export const login_technician = async (req, res) => {
    try{
    const data = req.body;
    const result = await Technicianservice.technician_login(data);
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

export const get_all_technicians = async (req, res) => {
    try{
    const result = await Technicianservice.get_all_technicians();
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

export const get_technician = async (req, res) => {
    try{
    const id = req.params.id;
    const result = await Technicianservice.get_technician(id);
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

export const update_technician = async (req, res) => {
    try{
    const id = req.params.id;
    const data = req.body;
    const result = await Technicianservice.update_technician(id, data);
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

export const delete_technician = async (req, res) => {
    try{
    const id = req.params.id;
    const result = await Technicianservice.delete_technician(id);
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

export const restore_technician = async (req, res) => {
    try{
    const id = req.params.id;
    const result = await Technicianservice.restore_technician(id);
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}
