const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.listen(PORT, function () { console.log(`Express server listening on port: ${PORT}`);});