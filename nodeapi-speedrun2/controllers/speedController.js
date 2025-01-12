const express = require('express')
const Speed = require('../models/speedModel')

async function getAllSpeedData(req,res,next){
    try {
        const data = await Speed.find({})
        res.json({
            success: true,
            data
        })
    } catch (error) {
        console.log("Error writing data", error);
    }
}
async function getOneSpeedData(req,res,next) {
    try {
        const data = await Speed.findById(req.params.id)
        if (!data) {
            return next(new Error("Item not in DB"));
        }
        res.json({
            success: true,
            data
        })
    } catch (error) {
        console.log("Error writing data", error);
    }
}

async function addSpeedData(req,res,next){
    try {
        const { carType,carTopSpeed, carYearMake} = req.body
        const data = await Speed.create({carType, carTopSpeed, carYearMake});
        res.status(200).send({
            success: true,
            data
        })
    } catch (error) {
        console.log("Error writing data", error)
    }
}
async function deleteAllSpeedData(req,res,next){
    const data = await Speed.findByIdAndDelete(req.params.id);
    if(!data){
        return next(new Error("Item not in DB"));
    }
    res.status(200).send({
        success: true,
        msg: "Item has been deleted",
        data
    });
}
async function updateAllSpeedData(req,res,next) {
    data = await Speed.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        success: true,
        msg: "Item has been Updated",
        data,
    });

}

module.exports = {
    getAllSpeedData,
    getOneSpeedData,
    addSpeedData,
    deleteAllSpeedData,
    updateAllSpeedData,
};