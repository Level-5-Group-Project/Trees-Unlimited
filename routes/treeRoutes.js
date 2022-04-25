const express = require('express')
const treeRouter = express.Router()
const Tree = require('../models/tree')
treeRouter.route('/')
    .get((req, res, next) => {
        Tree.find((err, trees) => {
            if (err) {
                res.status(500)
                return next(err)
            }

           return res.status(200).send(trees)
        })
    })
  
    .post((req, res,next)=>{
        const newTree = new Tree(req.body)
        console.log(req.body)
        newTree.save((err, savedTree)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedTree)
        })
    })

treeRouter.get('/:treeId', (req, res) => {
    const treeId = req.params.treeId
    Tree.findById(treeId, (err, tree) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(tree)
    })
})

treeRouter.delete('/:treeId', (req,res,next)=>{
    Tree.findOneAndDelete(req.params.treeId, (err,deletedTree)=>{
        
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedTree}`)
    })
})


treeRouter.put('/:treeId',(req, res, next)=>{
    Tree.findOneAndUpdate(req.params.treeId , req.body, {new:true},(err,updateTree)=>{
        if(err){
            res.status(500).send(err)
            return next(err)
        }
        return res.status(200).send(updateTree)
    })
})
treeRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredType = Tree.filter(tree => tree.type === type)
    res.send(filteredType)
    console.log(req)
})


module.exports = treeRouter