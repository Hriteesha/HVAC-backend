import offerModel from "./model.js";



export const create_offer = async (data) => {
    return await offerModel.create(data);
}
export const getAll = async () => {
  return await offerModel.find({});
};
