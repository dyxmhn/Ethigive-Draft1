const { Schema, default: mongoose } = require("mongoose");
const Project=require("../models/project");


//functionality behind index route
exports.getAll = async() => {
    const projects = Project.find();
    return projects;
}

//functionality behind create route
exports.addNew = async() => {

}

//functionality behind show route
exports.getOne = async() => {

}