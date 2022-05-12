import { User } from "../../models/User";
import { ErrorHandler } from "../../utilities/error-handler/ErrorHandler";

export async function ControllerDeleteUser(req, res) {
  try {
    const result = await await User.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: { deleted: true },
      },
      { returnOriginal: false }
    );

    res.send(result);
  } catch (e) {
    ErrorHandler({
      errorMessage: e,
      response: res,
    });
  }
}
