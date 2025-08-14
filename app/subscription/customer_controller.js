import * as CustomerService from "./customer_service.js"



export const buy_package = async(req,res)=>{  
    try{
        const data = req.body
        const result = await CustomerService.buy_package(data)
        res.status(200).send(result)
    }catch(error){
        res.send(error.message)
    }
}
export const renew_package = async (req, res) => {
  try {
    
    const { subscription_id } = req.body;

    console.log("Subscription ID received:", subscription_id); // for debugging

    if (!subscription_id) {
      return res.status(400).json({ error: "subscription_id is required" });
    }

    const result = await renew_package(subscription_id,durationMonths); 
    return res.status(200).json(result);
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(400).json({ error: err.message });
  }
};


export const get_subcriptions = async(req,res)=>{
    try{
        const result = await CustomerService.get_subcriptions()
        res.status(200).send(result)
    }catch(error){
        res.status(400).send(error.message)
    }
}