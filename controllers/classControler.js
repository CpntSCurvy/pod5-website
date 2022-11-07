//Handle requests to get data instance from API
//import demo
const classData = require('../schema/timetable')
//const csv = require('csvtojson')


const getAllClasses = async(req,res) =>{
    // console.log(classData)

    //const data = await csv.fromFile('../schema/relationalData.csv');
    //console.log(data);
    return res.render("classesPage.hbs",{data: classData})

}

module.exports = {
    getAllClasses
}