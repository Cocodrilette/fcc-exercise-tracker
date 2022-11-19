import { Schema, model } from "mongoose";

const exerciseSchema = new Schema({
  username: {
    type: String,
    required: [true, "The username is required"],
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

const exerciseModel = model("Exercise", exerciseSchema);

export default exerciseModel;
