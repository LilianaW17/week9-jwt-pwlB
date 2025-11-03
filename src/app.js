require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5003;

const logger = require('./middleware/logger');
const proposalRouter = require('./routes/proposalRouter');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');
const authRouter = require('./routes/authRouter');

app.use(express.json());
app.use(logger);

app.use('/auth', authRouter);
app.use('/proposals', proposalRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server PKM berjalan di http://localhost:${PORT}`);
});