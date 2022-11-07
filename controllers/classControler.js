//Handle requests to get data instance from API
//import demo
const classData = require('../schema/timetable')

//These 3 lines are not working
/*const fs = require('fs')
const csv = require('csvtojson')
const csvdata = require('../controllers/relational.csv')*/

const getAllClasses = (req,res) =>{
    //The below 3 lines also are not working... 
    //thought process, await and async need to 
    //be involved however not implementing properly
    
    /*console.log(csvdata)
    const data =  csv().fromFile(csvdata);
    console.log(data[0]);*/
    return res.render("classesPage.hbs",{data: classData})

}

module.exports = {
    getAllClasses
}