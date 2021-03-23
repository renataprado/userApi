
const mongoose = require("mongoose");
const User = require('../models/User.js');    


module.exports = {

    async index(req, res){    
        const users = await User.find();
        return res.status(200).json(users);
    },

    async findById(req, res){
        try{
            const user = await User.findById(req.params.userId);
            return res.status(200).json(user);
        } catch (err){
            console.log(err);
            return res.status(500).json({message: err})
        }   
    },

    async delete(req, res){
        const user = await User.findByIdAndRemove(req.params.userId);
        return res.send(user);
    },

    async update(req, res){
        console.log(req.body);
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new:true }, (err, doc)=>{
            console.log(doc);
        })

        return res.json(user);
    }
};
    
