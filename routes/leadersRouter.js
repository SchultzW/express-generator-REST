const express = require('express');
const bodyParser=require('body-parser');

const leadersRouter=express.Router();

leadersRouter.use(bodyParser.json());
//one group of methods implemented on the express router
//declare end point at / and chain all methods together
// router is mounted at index.js

leadersRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>
{
    res.end('Will send all the leaders to you!');
})
//new
.post((req,res,next)=>{
    res.end('Will add the leader: '+ req.body.name+
    'with details: '+req.body.description)//post body contains a name property
})//we get the body info from bodyParser

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT not supported on /leaders');
})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders!');
});
leadersRouter.route('/:leaderId')
.all((req,res,next)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.post('/:leaderId',(req,res,next)=>{
    res.statusCode=403;
    res.end('POST not supported on /promotions/'+req.params.leaderId);
})
.put('/:leaderId',(req,res,next)=>{
    res.write('Updating the promotion: '+req.params.leaderId+'\n');
    res.end('Will update the promotion: '+req.body.name+'with details: '+req.body.description);
})
.delete('/:leaderId',(req,res,next)=>{
    res.end('Deleting promotion: '+req.params.leaderId);
});
module.exports=leadersRouter;