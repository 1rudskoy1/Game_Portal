const express = require("express");
const router = express.Router({mergeParams: true});
const videos = require('../models/Videos');
router.get('/', async (req, res)=>{
    try{
        const list = await videos.find();
        res.status(200).json({list});
    }catch(e){
        res.status(500).json({
            message: "Ошибочка вышла"
        });
    }
});

module.exports = router