// routes/providerRoutes.ts
import express from 'express';
import ProviderController from '../controllers/ProviderController';

const router = express.Router();

router.get('/providers', ProviderController.getAllProviders);
router.get('/providers/:id', ProviderController.getProviderDetails);
router.get('/providers/:userId/organizations', ProviderController.getProvidersByUser);



export default router;
