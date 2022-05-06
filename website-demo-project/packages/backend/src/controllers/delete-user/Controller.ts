import { User } from "../../models/User";

export async function ControllerDeleteUser(req, res) {
  const result = await await User.deleteOne({ _id: req.body._id });

  res.send(result);
}