const express = require("express");
const app = require('../models/Apps');
const router = express.Router({mergeParams: true});

router.get('/', async (req, res)=>{
    try{
        const list = await app.find();

        res.status(200).json({list});
    }catch(e){
        res.status(500).json({
            message: "Ошибочка вышла"
        })
    }
});

module.exports = router