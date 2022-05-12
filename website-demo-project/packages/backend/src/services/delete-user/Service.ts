import { UserType } from "../../models/User";
import { User } from "../../models/User";

export interface CreateUserProps {
  body: UserType;
}

export async function CreateUser(props: CreateUserProps) {
  const {
    age,
    birthDate,
    deleted = false,
    email,
    lastName,
    name,
    password,
    profilePicture,
    username,
  } = props.body;

  const user = new User({
    username: username,
    password: password,
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    profilePicture: profilePicture,
    birthDate: birthDate,
    deleted: deleted,
  });

  const result = await user.save();
  return result;
}
