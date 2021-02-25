
const express = require('express');

const router = express.Router();


router.use("/about-us",(request, response) =>{
    response.send('<html><head><meta charset="UTF-8"><title>Acerca de nosotros</title></head><h1>Acerca de nostros</h1><body><h3>RECON se fundó en 1960 y este año celebra su 81 aniversario desde que comenzamos siendo una pequeña empresa local queretana.</h3></body></html>')
});

router.use("/logo",(request,response)=>{
    response.send('<html><img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt=""></html>');
});

router.use("/github",(request,response)=>{
    response.redirect("https://github.com/JARE2001/Construccion-de-software.git");
});

module.exports = router;