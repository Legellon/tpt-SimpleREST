const express = require('express')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.post('/user', (req, res) => {
    const param = req.body
    const user = {
        "id": param.id,
        "username": param.username,
        "firstName": param.firstName,
        "lastName": param.lastName,
        "email": param.email,
        "password": param.password,
        "phone": param.phone,
        "userStatus": param.userStatus
    } 
    res.status(201).json(user)
})

server.get('/user/:username', (req, res) => {
    res.json({
        "id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
    })
})

server.listen(3000)