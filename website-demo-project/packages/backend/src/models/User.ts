import { Schema, model, connect } from "mongoose";

export interface userInput {
  username: string;
  name: string;
}

export const userSchema = new Schema<userInput>({
  username: { type: String, required: true },
  name: { type: String, required: true },
});

export const User = model<userInput>("User", userSchema);
