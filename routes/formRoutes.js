const express = require('express')
const formRouter = express.Router()
const Form = require('../models/form')
formRouter.route('/')
    .get((req, res, next) => {
        Form.find((err, forms) => {
            if (err) {
                res.status(500)
                return next(err)
            }

           return res.status(200).send(forms)
        })
    })
  
    .post((req, res,next)=>{
        const newForm = new Form(req.body)
        
        console.log(req.body)
        newForm.save((err, savedForm)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedForm)
        })
    })

formRouter.get('/:formId', (req, res) => {
    const formId = req.params.formId
    Form.findById(formId, (err, form) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(form)
    })
})

formRouter.delete('/:formId', (req,res,next)=>{
    Form.findOneAndRemove(req.params.fomrId, (err)=>{
        
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted`)
    })
})


formRouter.put('/:treeId',(req, res, next)=>{
    Form.findOneAndUpdate(req.params.treeId , req.body, {new:true},(err,updateForm)=>{
        if(err){
            res.status(500).send(err)
            return next(err)
        }
        return res.status(200).send(updateForm)
    })
})
formRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredType = Form.filter(form => form.type === type)
    res.send(filteredType)
    console.log(req)
})


module.exports = formRouter