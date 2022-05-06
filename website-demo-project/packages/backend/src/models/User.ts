import { Schema, model, connect } from "mongoose";

export interface userInput {
  username: string;
  password: string;
  name: string;
  lastName: string;
  age: number;
  email: string;
  profilePicture: string;
  birthDate: Date;
}

export const userSchema = new Schema<userInput>({
  username: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  profilePicture: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

export const User = model<userInput>("User", userSchema);
