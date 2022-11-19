import { Schema, model } from "mongoose";

const UserSchema = Schema({
  username: {
    type: String,
    required: [true, "The name is required"],
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, ...userData } = this.toObject();
  return userData;
};

const userModel = model("User", UserSchema);

export default userModel;
