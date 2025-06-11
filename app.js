import express from 'express'

const app = express()

export default app

import employees from '#db/employees'


app.route("/").get((req,res)=>{
    res.send("Hello Employees!")
})


app.route("/employees").get((req,res)=>{
    res.send(employees)
})

app.route("/employee/:id").get((req,res)=>{
    const id = parseInt(req.params.id, 10)

    if(id < 0 || id >= employees.length){
        return res.status(404).send("there is no employee with that id")
    }
    res.status(200).send(employees[id])
})

app.route("/employees/random").get((req,res)=>{
    const randomIndex = Math.floor(Math.random() * employees.length)
    const randomEmployee = employees[randomIndex]
    
    res.send(randomEmployee)

})