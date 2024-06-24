// We are in this workout.js file because  we wanner bring all the API end points, thus the routers here so that the server.js do not become bloated.

// 6. The express app is not here , so we needed to bring it here

const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all workouts' })
})

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single workout' })
})


// Post a new workout
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a workout' })
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a workout' })
})

// export the router
module.exports = router
