import { User } from "../../models/User";

export async function ControllerGetByIdUser(req, res) {
    const result = await User.findOne({ _id: req.body._id });

  res.send(result);
}