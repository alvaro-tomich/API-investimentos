const express = require('express');

const userRouter = require('./routes/user.route');
const purchasesRouter = require('./routes/purchases.route');
const salesRouter = require('./routes/sales.route');
const investimentsRouter = require('./routes/investiments.route');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(purchasesRouter);
app.use(salesRouter);
app.use(investimentsRouter);

module.exports = app;
