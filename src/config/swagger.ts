import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { PORT } from './env';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'INESIC:SMARTOP360 API',
      version: '1.0.0',
      description: 'Documentation d API pour SMARTOP360',
    },
    servers: [
      {
        url: `https://smartop360.onrender.com/`,
        description: 'Serveur de développement',
      },
      {
        url: `http://localhost:${PORT}/`,
        description: 'Serveur local',
      },
      
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Indique le format du token utilisé
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Applique le schéma de sécurité par défaut à toutes les routes
      },
    ],
  },
  apis: ['src/routes/*'], // Chemin vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };


