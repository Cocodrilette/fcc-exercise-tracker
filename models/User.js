import { Schema, model } from "mongoose";

const UserSchema = Schema({
  username: {
    type: String,
    required: [true, "The name is required"],
  },
});

const userModel = model("User", UserSchema);

export default userModel;
