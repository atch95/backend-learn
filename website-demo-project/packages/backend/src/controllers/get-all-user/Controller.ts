import { User } from "../../models/User";

export async function ControllerGetAllUser(req, res) {
  const result = await User.find({});

  res.send(result);
}
