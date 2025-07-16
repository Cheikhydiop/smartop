// routes/projets.routes.ts
import express from 'express';

import { Router } from 'express';
import ProjetController from '../controllers/ProjetController';

const router = express.Router();

// router.get('/', ProjetController.getProjets);
router.get('/:id', ProjetController.getProjetById);
router.get('/user/:userId', ProjetController.getProjetsByUser);  // Projets d'un utilisateur
router.post('/projet/:projetId', ProjetController.updateProject);  // Projets d'un utilisateur


router.put('/:id', ProjetController.updateProject); // Mise à jour complète d'un projet
// router.patch('/:id', ProjetController.patchProject); // Mise à jour partielle d'un projet
// router.patch('/:id/status', ProjetController.updateProjectStatus); // Mise à jour du statut uniquement
// router.patch('/:id/progress', ProjetController.updateProjectProgress); // Mise à jour du progrès uniquement


export default router;
