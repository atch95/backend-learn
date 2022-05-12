import { User } from "../../models/User";
import { ErrorHandler } from "../../utilities/error-handler/ErrorHandler";

export async function ControllerGetByIdUser(req, res) {
  try{

  
    const result = await User.findOne({ _id: req.body._id, deleted: false });

  res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage:e,
      response:res,
    });
  }
}