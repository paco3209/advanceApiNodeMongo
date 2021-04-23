import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/exampledb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log("db connected"))
    .catch(err => console.log(err))


