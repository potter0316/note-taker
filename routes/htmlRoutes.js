const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    console.info(`${req.method} Received ${req.path}`)
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    console.info(`${req.method} Recieved ${req.path}`)
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;