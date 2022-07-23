const express = require('express');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRouter = require('./routes/user.route');
const purchasesRouter = require('./routes/purchases.route');
const salesRouter = require('./routes/sales.route');
const investimentsRouter = require('./routes/investiments.route');
const swaggerConfig = require('./docs/swagger.config');

const app = express();

app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(userRouter);
app.use(purchasesRouter);
app.use(salesRouter);
app.use(investimentsRouter);

module.exports = app;
