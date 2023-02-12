//jshint esversion:6
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, 'User already exists, Log in instead']
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    otherNames: {
        type: String
    },
    mobileNumber: {
        type: String,
        required: true
    },
    countryName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    loanType: {
        type: String,
        required: true
    },
    loanPurpose: {
        type: String,
        required: true
    },
    otherPurpose: {
        type: String
    },
    occupation: {
        type: String
    },
    idType: {
        type: String,
        required: true
    },
    idFile: {
        type: String,
        required: true
    },
    firstLogin: {
        type: Date,
        default: new Date().toJSON()
    },
    activated: {
        type: Boolean,
        default: false
    },
  

});

module.exports = mongoose.model("User", userSchema);