const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');

const apiRoutes = require('./routes/apiRoutes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use('/api', apiRoutes);

app.listen(PORT, function() {console.log(`Express server listening on port: ${PORT}`);});