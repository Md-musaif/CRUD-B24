const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONN)
.then(() => {
    console.log('MongoDB Connected ..')
}).catch((err) => {
    console.log('Connection Failed', err);
})