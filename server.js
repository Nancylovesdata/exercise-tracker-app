require('dotenv').config();

// 1. requiring thhe express package here afyer installing it in the terminal
const express = require('express')
// Not sure of number 10.  requiring mongoose
const mongoose = require('mongoose')
// 2.starting the express app
const app = express()

// 9. middleware to handle post and patch
app.use(express.json())


// 7.
const workoutRoutes = require('./routes/workouts')

// 5. middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//4. taking action after listening through routes
//route handler
// app.get('/', (req, res)=>{
//     res.json({mssg: 'Welcome to the app'})

// })

//8. All the routes from the workout.js
app.use('/api/workouts', workoutRoutes)

// 11. connect mongoose to te db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{

//3. listen for request
app.listen(process.env.PORT, () => {
    console.log('conected to db & listening on port', process.env.PORT)
}
)    
})
.catch((error)=>{console.log(error)})

