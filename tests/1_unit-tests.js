/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.strictEqual(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '100.12mi';
      assert.strictEqual(convertHandler.getNum(input), 100.12)
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '1/2mi';
      assert.strictEqual(convertHandler.getNum(input), 0.5)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '0.8/2mi';
      assert.strictEqual(convertHandler.getNum(input), 0.4);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      const input = '1/2/13lbs';
      assert.strictEqual(convertHandler.getNum(input), "invalid number");
      done();
    });
    
    test('No Numerical Input', function(done) {
      const input = 'mi';
      assert.strictEqual(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        let input = `10${ele}`;
        assert.strictEqual(convertHandler.getUnit(input), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = '10cunts';
      assert.strictEqual(convertHandler.getUnit(input), "invalid unit");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','km','mi','kg','lbs'];
      var expect = ['gallons','litres','kilometres','miles','kilograms','pounds'];
      input.forEach((ele, i) => {
        assert.strictEqual(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'l'];
      var expected = 1.3208;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.0467;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [5, 'km'];
      var expected = 3.1068;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [5, 'lbs'];
      var expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [5, 'kg'];
      var expected = 11.0231221009;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});