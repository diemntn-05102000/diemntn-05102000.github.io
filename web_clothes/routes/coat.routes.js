const express = require('express');
const { sequelize } = require('../databases/database');
const router = express.Router();
const item = require('../models/item');
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    item.findAll({
        where:{
            theme: 'Áo'
        }
    }).then((data) => {
      res.json({data:data, status:201})
      
    }).catch((err) => {
      console.log('err',err);
      res.status(401).send({
      message: 'Not found item.',
      });
    });
  });
module.exports = router;
