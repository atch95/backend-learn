import { User } from "../../models/User";

export async function ControllerCreateUser(req, res) {

  const user = new User({
    name: "Bill",
    username: "billygates12",
  });

  const result = await user.save();

  res.send(result);



}


