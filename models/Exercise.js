import { Schema, model } from "mongoose";

const exerciseSchema = new Schema({
  username: {
    type: String,
    required: [true, "The username is required"],
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

exerciseSchema.methods.toJSON = function () {
  const { __v, _id, ...exerciseData } = this.toObject();
  return exerciseData;
};

const exerciseModel = model("Exercise", exerciseSchema);

export default exerciseModel;
