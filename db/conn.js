const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/prajwaldata", {}).then(()=>{
    console.log("connectd");
}).catch((err)=>{
    console.log(err);
})