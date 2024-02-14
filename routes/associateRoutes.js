import express from 'express';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
import { getAllAssociates, postAssociateApplications } from '../controllers/associateController.js';

const router = express.Router();

//to send your job details of a worker
router.route('/associate').post(postAssociateApplications)

//Admin Routes get all worker
router.route('/admin/associates').get(isAuthenticated, authorizeAdmin, getAllAssociates)


export default router;