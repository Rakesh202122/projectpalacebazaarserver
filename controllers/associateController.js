import {catchAsyncError} from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../utils/errorHandler.js'
import { Associate } from '../models/Associate.js'


export const postAssociateApplications = catchAsyncError(async (req, res, next) => {
    const {name, phone, gender, jobtype} = req.body

    if (!name || !phone || !gender || !jobtype)
        return next(new ErrorHandler('Please Enter all field', 400))

        await Associate.create({
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


export const getAllAssociates = catchAsyncError(async (req, res, next) => {
    const associates = await Associate.find();
  
    res.status(200).json({
      success: true,
      associates,
    });
  });