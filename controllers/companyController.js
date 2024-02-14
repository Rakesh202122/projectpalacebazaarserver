import {catchAsyncError} from '../middlewares/catchAsyncError.js'
import ErrorHandler from '../utils/errorHandler.js'
import { Company } from '../models/Company.js'


export const postCompanyApplications = catchAsyncError(async (req, res, next) => {
    const {name, phone, gender, jobtype} = req.body

    if (!name || !phone || !gender || !jobtype)
        return next(new ErrorHandler('Please Enter all field', 400))

        await Company.create({
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


export const getAllCompanys = catchAsyncError(async (req, res, next) => {
    const companys = await Company.find();
  
    res.status(200).json({
      success: true,
      companys,
    });
  });
