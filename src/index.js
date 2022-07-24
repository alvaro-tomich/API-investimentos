/* eslint-disable no-console */
require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));
