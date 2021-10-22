const express = require('express')
const inventarioTienditaRouter = express.Router()
const axios = require('axios')

inventarioTienditaRouter.get('', (req,res)=>{

    res.render("addItem")
});

inventarioTienditaRouter.post('',(req, res) =>{
    const { itemID, descripcion, costo, liga_foto_item, cantidad  } = req.body
    console.log(req.body)

    axios.post('http://localhost:3001/api/addItem', { 
        itemID: itemID,
        descripcion: descripcion,
        costo: costo, 
        liga_foto_item: liga_foto_item,
        cantidad: cantidad
        })
        .then(function (response) {
            console.log(response);
        })

    //res.redirect('home')
    res.redirect('addItemSucceed')
})


module.exports = inventarioTienditaRouter