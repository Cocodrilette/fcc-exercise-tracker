import userModel from "../models/User.js";

export const getAllUsers = async (req, res) => {
  const users = await userModel.find({});

  res.json(users);
};

export const createUser = async (req, res) => {
  const { username } = req.body;

  const user = new userModel({
    username,
  });

  try {
    const result = await user.save();
    res.json(result);
  } catch (error) {
    console.error("error on create user", error);
  }
};
