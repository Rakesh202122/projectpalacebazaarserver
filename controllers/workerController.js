import {catchAsyncError} from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../utils/errorHandler.js'
import { Worker } from '../models/Worker.js'


export const postWorkerApplications = catchAsyncError(async (req, res, next) => {
    const {name, phone, gender, jobtype} = req.body

    if (!name || !phone || !gender || !jobtype)
        return next(new ErrorHandler('Please Enter all field', 400))

        await Worker.create({
          name,
          phone,
          gender,
          jobtype,
        });
      
        res.status(201).json({
          success: true,
          message: "Job Send Successfully For Smart Labour Chowk.",
        });
      });


export const getAllWorkers = catchAsyncError(async (req, res, next) => {
    const workers = await Worker.find();
  
    res.status(200).json({
      success: true,
      workers,
    });
  });