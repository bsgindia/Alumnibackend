const express = require('express');
const {
    createAlumni,
    getAllAlumni,
    getAlumniById,
    updateAlumni,
    deleteAlumni,
} = require('../controllers/alumniController');

const router = express.Router();

router.post('/', createAlumni);
router.get('/', getAllAlumni);
router.get('/:id', getAlumniById);
router.put('/:id', updateAlumni);
router.delete('/:id', deleteAlumni);

module.exports = router;
