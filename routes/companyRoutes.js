import express from 'express';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
import { getAllCompanys, postCompanyApplications } from '../controllers/companyController.js';

const router = express.Router();

//to send your job details of a worker
router.route('/company').post(postCompanyApplications)

//Admin Routes get all worker
router.route('/admin/companys').get(isAuthenticated, authorizeAdmin, getAllCompanys)


export default router;