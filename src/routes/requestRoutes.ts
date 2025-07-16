// routes/requestRoutes.ts
import express from 'express';
import { RequestController } from '../controllers/RequestController';

const router = express.Router();

// Routes principales
router.get('/', RequestController.getAllRequests);
router.get('/:id', RequestController.getRequestById);
router.get('/organization/:id', RequestController.getRequestsByUserOrganization);



export default router;