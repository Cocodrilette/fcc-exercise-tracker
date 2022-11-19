import userModel from "../models/User.js";

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
