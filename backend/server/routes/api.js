const express = require('express')
const router = express.Router()
const Client = require('../model/Client')

// let data = require('../routes/data') ---- save all the data in database
// for(let i of data) {
//     let newClient = new Client(i)
//     newClient.save()
// }

router.get('/clients', (req, res) => {
    Client.find({}, function (err, response) {
        res.send(response)
    })
})

router.get('/newClients', (req, res) => {
    let dateOfMonthAgo = new Date();
    dateOfMonthAgo.setDate(dateOfMonthAgo.getDate() - 30)
    Client.find({
        'firstContact':
        {
            "$gte": dateOfMonthAgo,
        }
    }).exec(function (err, response) {
        res.send(response)
    })
})

router.get('/newClientsSoldLastYear', (req, res) => {
    let dateOfYearAgo = new Date();
    dateOfYearAgo.setDate(dateOfYearAgo.getDate() - 365)
    Client.find({
        'firstContact':
        {
            "$gte": dateOfYearAgo,
        },
        sold : true
    }).exec(function (err, response) {
        res.send(response)
    })
})

//last year
router.get('/newClientsLastYear', (req, res) => {
    let dateOfYearAgo = new Date();
    dateOfYearAgo.setDate(dateOfYearAgo.getDate() - 365)
    Client.find({
        'firstContact':
        {
            "$gte": dateOfYearAgo,
        }
    }).exec(function (err, response) {
        res.send(response)
    })
})
//before the last year
router.get('/newClientsBeforeLastYear', (req, res) => {
    let dateOfyearAgo = new Date();
    dateOfyearAgo.setDate(dateOfyearAgo.getDate() - 365)
    Client.find({
        'firstContact':
        {
            "$lte": dateOfyearAgo,
        }
    }).exec(function (err, response) {
        res.send(response)
    })
})

router.post('/client', (req, res) => {
    let newClient = new Client(req.body)
    newClient.save()
    res.end()
})

router.put('/editClient/:name', (req, res) => {
    let name = req.params.name
    let owner = req.body.owner
    let emailType = req.body.emailType
    let sold = req.body.sold
    Client.find({ name: name }).exec(function (err, client) {
        if (owner) {
            client[0].owner = owner
        }
        else if (emailType) {
            client[0].emailType = emailType
        }
        else {
            client[0].sold = sold
        }
        client[0].save()
        res.send(client[0])
    })
})

router.put('/editClientInfo/:email', (req, res) => {
    let email = req.params.email
    let name = req.body.name
    let country = req.body.country
    Client.find({ email: email }).exec(function (err, client) {
        client[0].name = name
        client[0].country = country
        client[0].save()
        res.send(client[0])
    })
})



module.exports = router
