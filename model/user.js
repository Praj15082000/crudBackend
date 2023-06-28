const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name   : {
        type : String,
        required : true
    },
    // userId : {
    //     type : String,
    //     required :true
    // },
    phoneNumber : {
        type : String,
        required : true
    },
    // createDate : {
    //     type : String,
    //     require : true
    // }
});

const userData = new mongoose.model("userData", userSchema);

module.exports = userData;
