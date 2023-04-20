const express = require('express')
const breadsRoute = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breadsRoute.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
})


// SHOW
breadsRoute.get('/:arrayIndex', (req, res) => {
  if(Bread[req.params.arrayIndex]) {
    res.render('show', {
    bread: Bread[req.params.arrayIndex]
  })
  } else {
    res.send('404')
  }

})  

module.exports = breadsRoute
