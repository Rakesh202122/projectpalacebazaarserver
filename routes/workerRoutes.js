import express from 'express';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
import { getAllWorkers, postWorkerApplications } from '../controllers/workerController.js';

const router = express.Router();

//to send your job details of a worker
router.route('/worker').post(postWorkerApplications)

//Admin Routes get all worker
router.route('/admin/workers').get(isAuthenticated, authorizeAdmin, getAllWorkers)


export default router;