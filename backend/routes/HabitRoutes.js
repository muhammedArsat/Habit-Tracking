const express = require('express');
const router = express.Router();
const {
    createHabit,
    getAllHabit,
    updateHabit,
    deleteHabit,
    getHabitById,
} = require('../controller/HabitController');

router.post("/habit", createHabit);
router.get("/habit", getAllHabit);
router.get("/habit/:id", getHabitById)
router.put('/habit/:id/:index', updateHabit);
router.delete('/habit/:id', deleteHabit);

module.exports = router;