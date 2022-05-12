import { User } from "../../models/User";
import { ErrorHandler } from "../../utilities/error-handler/ErrorHandler";
import{Response} from "express";
import { CreateUser } from "../../services/create-user/Service";


export async function ControllerCreateUser(req, res) {
try{
const result = CreateUser ({body:req.body})

  res.send(result);
}  catch (e) {
  ErrorHandler({
    errorMessage:e,
    response:res,
  });
}

}

