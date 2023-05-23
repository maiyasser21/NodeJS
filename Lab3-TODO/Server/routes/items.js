const router = require('express').Router();
const todoschema=require('../models/todoitems');

router.post('/api/item', async (req,res)=>{
    try{
        const newItem=new todoItemModel({
            item:req.body.item
        })
        const saveItem = await newItem.save();
        res.status(200).json("Item Added");
    }
    catch(err){
            res.json(err);
    }   
});

router.get('/api/item', async (req,res)=>{
    try{
        const items=await todoItemModel.find({});
        res.status(200).json(items);
    }
    catch(err){
            res.json(err);
    }

});

module.exports = router;
 

