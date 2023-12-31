import User from "../models/usermodel.js";

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  try {
    if (password == user.password) {
      res.status(200).json({
        success: true,
        redirectTo: "/",
        message: "Login Successfully !",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Username or password is invalid !",
      error: error.message,
    });
  }
};
