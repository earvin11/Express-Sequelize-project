const { Router } = require('express');
const { indexReports } = require('../controllers/reports');


const router = Router();


router.get('/', indexReports);


module.exports = router;