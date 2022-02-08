const express = require('express')
const cors = require ('cors')
const users = require("./users.json")
const app = express()
const port = 5000

let globalId = 2

app.use(cors())
app.use(express.json())

// app.get to receive stored user information 


// app.post to store input information
const createUser = (req, res) => {
    let {firstName, lastName, email, password} =req.body
    
    let newUser = {
        id: globalId,
        firstName,
        lastName,
        email,
        password
    }

    users.push(newUser);
    res.status(200).send(newUser);
    globalId++;
}
app.post('/stationery/user', createUser)

const getUser = (req, res) => {
    console.log(req.params)
    let reqId = req.param.userId
    let result = users.filter(elem => +elem.id === +reqId)

    console.log('what is result', result, users)

    res.status(200).send(result)
}
app.get('/stationery/user/:userId', getUser)


app.listen(port, () => {
    console.log(`Lab server listening at http://localhost:${port}`)
  })