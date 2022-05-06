import { User } from "../../models/User";

export async function ControllerUpdateUser(req, res) {
  const result = await User.findOneAndUpdate(
    { _id:req.body._id },
    {
      $set: { username: req.body.username, name: req.body.name },
    },
    { returnOriginal: false }
  );
  console.log(result);
  res.send(result);
}