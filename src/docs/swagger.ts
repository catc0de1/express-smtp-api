import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import type { Application } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'STMP API, Ziymailer',
      version: '1.0.0',
      description: 'A simple SMTP API to send emails using Express and Nodemailer',
    },
    // servers: [
    //   {
    //     url: 'http://localhost:3000/api',
    //   },
    // ],
  },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export function swagger(app: Application) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
}
