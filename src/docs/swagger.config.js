const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API de Investimentos',
      description: 'API que simula o funcionamento de uma plataforma de investimentos',
      version: '1.0',
    },
    servers: [{
      url: 'http://localhost:3000',
      description: 'servidor local',
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/investiments.route.js', './src/routes/purchases.route.js', './src/routes/sales.route.js', './src/routes/user.route.js'],
};

module.exports = swaggerConfig;
