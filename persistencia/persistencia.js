const controller = {}
const mysql = require('mysql')
const url =require('../routes/database')
const dbconnection = mysql.createConnection(url.urlMysql)


controller.list  = (req, res) => {
  dbconnection.query("SELECT * FROM revist", (error, results, fields)=>{

    res.render("Revista",{
        data: results
    })
});
}

controller.agregar = (req, res) =>{
    const data=req.body
   dbconnection.query('INSERT INTO revist set ?',[data], (err,results)=>{
       res.redirect('/')
   })
}
