
const express = require ('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const sendingDataSchema = require('./models/Data');
const TileData = require('./models/TileData');


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("provide your database url",{useNewUrlParser: true});

const con = mongoose.connection

con.on('open',()=>{
    console.log("connection up")
})

// app.get('/get',async(req,res)=>{
//     try{
//         const tickets = await ticketSchema.find()
//         res.json(tickets)
//     }
//     catch(err){
//         res.send("err",err)
//     }
// });
// app.post('/send',async(req,res)=>{
//     const t1 = new ticketSchema({
//         title: req.body.title,
//         description: req.body.description
//     })

//     try{
//         const a1= await t1.save()
//         res.json(a1)
//     }
//     catch(err){}
// })

app.get('/getTileData',async(req,res)=>{
    try{
        const data = await TileData.find()
        res.json(data);
    }
    catch(err){
        res.send("error while getting data::",err)
    }
});

app.get('/sendTileData/:id',async(req,res)=>{
    try{

        let id= req.params.id;
        let result = await sendingDataSchema.findOne({ _id: id });
        res.json(result);

    }
    catch(e){
        res.send("error while sending data::", e)
    }
})



app.listen(5000,()=>{
    console.log("server up")
})
