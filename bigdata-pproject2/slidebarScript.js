var blockchain=require('./src/blockchain');
var fs = require('fs');


var slidebar=document.getElementById("currencySlidebar");
var currencyCollection=blockchain.syncCurrencyCollection();
 //var currencyCollection=JSON.parse.name(fs.readFileSync('currency/currency','utf8'));
 var stringBuilder   = [];
 var template        = '';
 for(var i = 0; i < currencyCollection.length; i++) {

    var name      = currencyCollection[i].name;
     
     template    = '<span style="color:#4CAF50;">' + name  + '</span>';
    stringBuilder.push(template);
 }

 slidebar.innerHTML = stringBuilder.join('');