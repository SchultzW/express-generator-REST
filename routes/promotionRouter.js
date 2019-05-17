const express = require('express');
const bodyParser=require('body-parser');

const promotionRouter=express.Router();

promotionRouter.use(bodyParser.json());
//one group of methods implemented on the express router
//declare end point at / and chain all methods together
// router is mounted at index.js

promotionRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>
{
    res.end('Will send all the promotions to you!');
})
//new
.post((req,res,next)=>{
    res.end('Will add the promotions: '+ req.body.name+
    'with details: '+req.body.description)//post body contains a name property
})//we get the body info from bodyParser

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT not supported on /promotions');
})
.delete((req,res,next)=>{
    res.end('Deleting all the promotions!');
});
promotionRouter.route('/:promotionId')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post('/:promotionId',(req,res,next)=>{
    res.statusCode=403;
    res.end('POST not supported on /promotions/'+req.params.promotionId);
})
.put('/:promotionId',(req,res,next)=>{
    res.write('Updating the promotion: '+req.params.promotionId+'\n');
    res.end('Will update the promotion: '+req.body.name+'with details: '+req.body.description);
})
.delete('/:promotionId',(req,res,next)=>{
    res.end('Deleting promotion: '+req.params.promotionId);
});
module.exports=promotionRouter;