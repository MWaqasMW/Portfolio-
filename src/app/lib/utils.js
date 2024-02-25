import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db Connected");
  } catch (err) {
    throw err;
  }
};

export const cryptPass = async (pass) => {
  const salt = await bcrypt.genSaltSync(8);
  const hash = await bcrypt.hashSync(pass, salt);
  return hash;
};

export const unCryptPass = async (hashPass, Pass) => {
  const isCorrect = await bcrypt.compareSync(Pass, hashPass);
  if (isCorrect) {
    return true;
  } else {
    return false;
  }
};

export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};

export const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user._id, email: user?.email },
    process.env.ACCESS_TOKEN_SECRET
    // { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: user._id, email: user?.email },
    process.env.REFRESH_TOKEN_SECRET
  );

  return { accessToken, refreshToken };
};
