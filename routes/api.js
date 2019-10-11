/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const bodyParser = require('body-parser');
module.exports = function (app) {
  
  const convertHandler = new ConvertHandler();
  app.use(bodyParser.urlencoded({ extended: false }))
  app.route('/api/convert')
    .get(function (req, res){
      let output;
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      if(initNum === 'invalid number' && initUnit === 'invalid unit') {
        return res.json({error: 'invalid number and unit'});
      } else if(initNum === 'invalid number') {
        return res.json({error: 'invalid number'});
      } else if(initUnit === 'invalid unit'){
        return res.json({error: 'invalid unit'});
      }
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
       output = {
          initNum: initNum, 
          initUnit: initUnit, 
          returnNum: returnNum, 
          returnUnit: returnUnit, 
          string: toString
        }
      return res.json(output);
    });
};
