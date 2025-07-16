// routes/dashboardRoutes.ts
import express from 'express';
import DashboardController from '../controllers/DashboardController';

const router = express.Router();

// Route principale pour récupérer toutes les données du dashboard
router.get('/', DashboardController.getDashboardData);

// Routes pour les données complètes du dashboard avec userId en paramètre
router.get('/user/:userId', DashboardController.getDashboardData);

// Routes pour les projets
router.get('/projects', DashboardController.getProjectsByUser);
router.get('/projects/user/:userId', DashboardController.getProjectsByUser);
// router.get('/projects/stats', DashboardController.getProjectsStats);

// Routes pour les tâches
router.get('/tasks', DashboardController.getTasksByUser);


// router.get('/tasks/recent', DashboardController.getRecentTasks);
// router.get('/tasks/:userId', DashboardController.getTasksStats);

// Routes pour les demandes
// Route avec paramètre dynamique
router.get('/requests/recent/:organizationId', DashboardController.getRecentRequests);

// router.get('/requests/:userId', DashboardController.getRequestsStats);

// Routes pour les utilisateurs
router.get('/users/organization', DashboardController.getUsersBySameOrganization);
router.get('/users/organization/:userId', DashboardController.getUsersBySameOrganization);

// Route pour les KPIs
// router.get('/kpis', DashboardController.getKPIs);

export default router;