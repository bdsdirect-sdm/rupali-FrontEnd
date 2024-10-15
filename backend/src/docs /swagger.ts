// src/docs/swagger.ts
import swaggerJsDoc from 'swagger-jsdoc';
import { SwaggerOptions } from 'swagger-ui-express';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API documentation for my project',
    },
    servers: [
        {
            url: 'http://localhost:7018',
        },
    ],
};

const options: SwaggerOptions = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'], // Path to your API docs
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
