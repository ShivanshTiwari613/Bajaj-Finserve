// server.js

const express = require('express');
const cors = require('cors'); 
const app = express();
const bfhlRoutes = require('./routes/bfhlRoutes');

app.use(cors()); 

app.use(express.json());

app.use('/', bfhlRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
