import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import { User } from "../models/User.js";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Not Logged In", 401));

  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);

  next();
});

export const authorizeSubscribers = (req, res, next) => {
  if (req.user.subscription.status !== "active" && req.user.role !== "admin")
    return next(
      new ErrorHandler(
        'Only Subscribers can access this resource',
        403
      )
    );
    next()
};

export const authorizeAdmin = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user.role !== "admin")
    return next(
      new ErrorHandler(
        `${user.role} is not allowed to access this resource`,
        404
      )
    );

  next();
});
