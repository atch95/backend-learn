import { User } from "../../models/User";

export async function ControllerCreateUser(req, res) {

  const user = new User({
    username: "billygates12",
    password: "123",
    name: "Bill",
    lastName:"Gates",
    age:60,
    email:"billy.gates@gmail.com",
    profilePicture:"https://i.imgur.com/dM7Thhn.png",
    birthDate:new Date(),
  });

  const result = await user.save();

  res.send(result);



}


