import userModel from "../models/User.js";
import exerciseModel from "../models/Exercise.js";

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

export const createExercise = async (req, res) => {
  let { description, duration, date } = req.body;
  const { _id } = req.params;

  if (!date) date = new Date();

  const user = await userModel.findById(_id);
  const username = user.username;

  const exercise = new exerciseModel({
    username,
    userID: _id,
    description,
    duration,
    date: new Date(date) || new Date(),
  });

  try {
    const result = await exercise.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  date = new Date(date).toDateString();
  res.json({
    username,
    description,
    duration: parseInt(duration),
    date,
    _id,
  });
};

export const getUserLogs = async (req, res) => {
  const { from, to, limit } = req.query;
  const { _id } = req.params;

  const user = await userModel.findById(_id);
  const username = user.username;

  let exercisesByUser;

  if ((from !== "", to !== "", limit !== "")) {
    exercisesByUser = await exerciseModel
      .find({
        userID: _id,
        date: {
          $gte: from ? new Date(from) : null,
          $lt: to ? new Date(to) : null,
        },
      })
      .limit(parseInt(limit));
  } else {
    exercisesByUser = await exerciseModel.find({
      userID: _id,
    });
  }
  const count = exercisesByUser.length;

  const log = exercisesByUser.map((exercise) => {
    return {
      description: exercise.description,
      duration: exercise.duration,
      date: new Date(exercise.date).toDateString(),
    };
  });

  res.json({
    username,
    count,
    _id,
    log,
  });
};
