import { User } from "../../models/User";
import { ErrorHandler } from "../../utilities/error-handler/ErrorHandler";
import{Response,Request} from "express";

export async function ControllerUpdateUser(req: Request, res: Response) {
  try {
  const result = await User.findOneAndUpdate(
    { _id: req.body._id, deleted:false },
    {
      $set: { username: req.body.username, name: req.body.name }
    },
    { returnOriginal: false }
  );
    return res.send(result);
  } catch (e) {
  ErrorHandler({
    errorMessage:e,
    response:res,
  });
}
}