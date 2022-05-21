const express = require('express');
const res = require('express/lib/response');
const router= express.Router()
const Alien= require('../models/alien')

router.get('/', async(req,res)=>{
    try
    {
        const aliens=await Alien.find() //we wait until we fetch the result or the data from the database
        res.json(aliens)//the output shoud be in json format
    }
    catch(err)
    {
        res.send('Error'+e)
    }
})

//to find a specific id or search
router.get('/:id', async(req,res)=>{
    try
    {
        const alien=await Alien.findById(req.params.id) //we wait until we fetch the result or the data from the database
        res.json(alien)//the output shoud be in json format
    }
    catch(err)
    {
        res.send('Error'+e)
    }
})

//lets add data to the database using post
router.post('/',async(req,res)=>{
    const alien=new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        //we have to save the data, await is used along with it
        const a1= await alien.save()
        res.json(a1)
    }

    catch(err){
        res.send(err)
    }
})

//patch: to change the subscription status
router.patch('/:id', async(req,res)=>{
    try
    {
        
        const alien=await Alien.findById(req.params.id)//find the particular id for whom u want to change the subscription status
        alien.sub=req.body.sub; //the new subscription status will be want user has changed
        const a1= await alien.save()
        res.json(alien) //the changed thing must be reflected to the client
    }
    catch(err)
    {
        res.send('Error'+e)
    }
})

//exporting the router is important because it should be accessible in line 14 of app.js
module.exports= router;