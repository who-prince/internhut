import User from "../models/usermodel.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(200).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server Error!",
      error: error.message,
    });
    console.log(error);
  }
};
