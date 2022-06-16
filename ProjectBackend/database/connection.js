const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, {
    // useCreateIndex: true, 
    // useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=> console.log('database connect sucesfully'))
.catch(err=> console.log(err))