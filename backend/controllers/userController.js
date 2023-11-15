import User from "../models/User.js";

export const createUser = async (req, res) => {
  console.log(req.body);
  const newUser = new User(req.body);
  console.log(newUser);
  try {
    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ sucess: true, message: "Successfully created", data: savedUser });
  } catch (err) {
    console.log("This is the error", err.message);
    res
      .status(500)
      .json({ sucess: false, message: "Failed to create. try again" });
  }
};

//update the user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      sucess: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "Failed to update. try again",
    });
  }
};

//delete the user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      sucess: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "Failed to delete.",
    });
  }
};

//getSingle user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      sucess: true,
      message: "Found successfully",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};

//get all the user
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      sucess: true,

      message: "Found Successfully",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};
