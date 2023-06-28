const express = require('express');
const cors = require('cors');
const app = express();
require('./db/conn');
app.use(cors());
app.use(express.json());
const userData = require('./model/user');
app.get('/user/read', async (req, res) =>{
    try {
       const data = await userData.find({});
       res.send(data);
    }
    catch(err){
          res.status(500).send('internal error');
    }
})

app.post('/user/create', async (req, res) =>{
    try{
      const Data = await userData.insert({});
      res.send(Data);
      Data.save();  
    }catch(err){
       res.status(500).send("error");
    }
    console.log(req.body);
    // let myData = new userData(req.body);
    // myData.save();
    
})

app.put('/user/update/:id', async (req, res) =>{
    try{
        const {id} = req.params;
        const updateData = req.body;
        const result = await userData.findByIdAndUpdate(id, updateData, {new :true});
        if(result) {
               res.send(result);
               console.log(result);
        }else{
            res.status(404).send("user not found");
        }
    }
    catch(err){
       res.send(500).send("internal error");
    }
});

app.delete('/user/delete/:id', async (req, res) =>{
    try{
     const {id} = req.params;
     const result = await userData.findByIdAndDelete(id);
     if(result){
      res.json({message : 'user delete'});
     }else{
     res.status(404).send("user not found");
     }
    }catch(err){
        res.status(500).send("internal server error");  
    }
})



app.listen(3000, ()=>{
    console.log("connect");
})