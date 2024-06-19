const mongoose = require('mongoose')

const Schema = mongoose.Schema
// The schema stuctures the data
const workoutSchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    reps: {
        type: Number,
        required: true

    },

    load: {
        type: Number,
        required: true
    }
    
}, {timestamps: true})

// THe model applies the schema to the model;
module.exports = mongoose.model('Workout',workoutSchema)

// Workout.find()