import { Schema, model } from "mongoose";

const logSchema = new Schema({
  username: {
    type: String,
    required: [true, "The username is required"],
  },
  count: {
    type: Number,
    required: true,
  },
  log: {
    type: Array,
    
  }
});

const exerciseModel = model("Exercise", exerciseSchema);

export default exerciseModel;
