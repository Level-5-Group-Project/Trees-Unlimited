const express = require('express')
const serviceRouter = express.Router()
const Service = require('../models/service')
serviceRouter.route('/')
    .get((req, res, next) => {
        Service.find((err, forms) => {
            if (err) {
                res.status(500)
                return next(err)
            }

           return res.status(200).send(forms)
        })
    })
  
    .post((req, res,next)=>{
        const newService = new Service(req.body)
        
        console.log(req.body)
        newService.save((err, savedService)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedService)
        })
    })

    serviceRouter.get('/:serviceId', (req, res) => {
    const serviceId = req.params.serviceId
    Service.findById(serviceId, (err, service) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(service)
    })
})

serviceRouter.delete('/:serviceId', (req,res,next)=>{
    Service.findOneAndRemove(req.params.serviceId, (err)=>{
        
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted`)
    })
})


serviceRouter.put('/:serviceId',(req, res, next)=>{
    Service.findOneAndUpdate(req.params.serviceId , req.body, {new:true},(err,updateService)=>{
        if(err){
            res.status(500).send(err)
            return next(err)
        }
        return res.status(200).send(updateService)
    })
})
serviceRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredType = Service.filter(service => service.type === type)
    res.send(filteredType)
    console.log(req)
})


module.exports = serviceRouter