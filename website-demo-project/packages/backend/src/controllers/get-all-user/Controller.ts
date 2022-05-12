import { User } from "../../models/User";
import { ErrorHandler } from "../../utilities/error-handler/ErrorHandler";
import { Response, Request } from "express";
export async function ControllerGetAllUser(req: Request, res: Response) {
  try{
  const result = await User.find({deleted:false});

  return res.send(result);
  }catch (e) {
    ErrorHandler({
      errorMessage:e,
      response:res,
    });
  }
}
