const Habit = require('../model/Habit');

//localhost:3000/api/v1/habit (POST)
const createHabit = async (req, res) => {
    try {
        const { name } = req.body
        const habit = new Habit({ name });
        await habit.save();
        return res.status(201).json(habit);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

//localhost:3000/api/v1/habit (GET)

const getAllHabit = async (req, res) => {
    try {
        const habits = await Habit.find({}).lean();
        return res.status(200).json(habits);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const getHabitById = async (req, res) => {
    try {
        const { id } = req.params;
        const habit = await Habit.findById(id);

        if (!habit) {
            return res.status(404).json({ message: 'Habit Not found' });
        }

        return res.status(200).json(habit);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

//localhost:3000/api/v1/habit (PUT)

const updateHabit = async (req, res) => {
    try {
        const { id,  index } = req.params;
        const { action } = req.query;
        const updateHabit = {};
        if (action === 'Y') {
            updateHabit[`days.${index}`] = 'Y';
        } else {
            updateHabit[`days.${index}`] = 'N';
        }
        const updatedUser = await Habit.findByIdAndUpdate(
            id,
            { $set: updateHabit },
            { new: true }
        );

        if (!updatedUser)
            return res.status(404).json({ message: 'Habit is Not Found' });

        return res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//localhost:3000/api/v1/habit (DELETE)

const deleteHabit = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHabit = await Habit.findByIdAndDelete(id);

        if (!deletedHabit) {
            return res.status(404).json({ message: 'Habit Not Found' });
        }

        return res.status(200).json({ message: 'Habit Deleted' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createHabit,
    getAllHabit,
    updateHabit,
    deleteHabit,
    getHabitById,
};
