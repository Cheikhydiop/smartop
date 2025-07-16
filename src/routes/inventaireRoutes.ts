
import express from 'express';
import InventaireController from '../controllers/InventaireController';

const router = express.Router();


router.get('/organization/:organizationId/inventory', InventaireController.getInventoryByOrganization);
router.get('/organization/:organizationId/inventory/stats', InventaireController.getInventoryStatsByOrganization);
router.get('/organization/:organizationId/inventory/transactions', InventaireController.getInventoryTransactionsByOrganization);
router.get('/:itemId/details', InventaireController.getItemDetails);
router.get('/:equipmentId/details/equipement', InventaireController.getEquipmentWithDetails);


export default router;

