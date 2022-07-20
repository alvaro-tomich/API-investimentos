const express = require('express');

const userRouter = require('./routes/user.route');
const purchasesRouter = require('./routes/purchases.route');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(purchasesRouter);

module.exports = app;
