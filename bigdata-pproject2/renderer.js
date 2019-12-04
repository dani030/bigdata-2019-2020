// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


var fs = require('fs');
var util = require('./util/util');
var wallet=require('./src/wallet');



    const register = document.getElementById("registerForm");
    register.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const rePassword=document.getElementById("password-repeat");
    if(password.value==rePassword.value){
    var walletId =util.encryptWith.sha256(email.value+password.value);
    // var name=util.generate.blockId();    
    //console.log(name);
    var generatedWallet = wallet.generateWallet(walletId);
    wallet.saveWallet(generatedWallet, walletId);
    document.getElementById("email").value='';
    document.getElementById("password").value='';
    document.getElementById("password-repeat").value='';
    }
    else{
      console.log('Fields Password and Repeat Password are differenct');
    }
  });
  




// var generateCurrency = function(name) {

//     return {
//         name      : name      
//     };
// };


// var saveCurrency = function(currencyObject) {

//     var currencyStringRepresentation =  fs.readFileSync('currency/currency')+ ',' +  JSON.stringify(currencyObject);
    
//     fs.writeFileSync('currency/currency', currencyStringRepresentation);
//     console.log(currencyObject.name+' has been added successful!')

// };


// var curObject = generateCurrency('Pound');
// saveCurrency(curObject);

 













// fs.writeFileSync('sample_fs/sample_fs_file.txt', 'Hellow world');
  
// var generateWallet = function() {
//     return {
//         id      : 'abcd',
//         amount  : 0
//     }
// }

// # Example object
// var SampleWallet = {
//     id     : 'abcd',
//     amount : 0
// };

// var SampleGeneratedWallet = generateWallet();

// console.log(SampleGeneratedWallet);


// # object fuynction call
// var Blockchain = {
//     id : 'abcd',
//     syncBlockchain : function() {
//         console.log('Sync all Blockchain nodes');
//     }
// };

// #proeprty call
// Blockchain.id

// #function call
// Blockchain.syncBlockchain();
// console.log()


// # file systemn module call
// var fs = require('fs');

// # sample file write process
// fs.writeFileSync('sample_fs_file.txt', 'Hellow world');

// * fs
// * http
// * crypto

// напражете си папка sample_fs 
// да се генерират 10 фаила с различно име и 
// сьдьржание в папката

// for(var i = 0; i < 10; i++) {
    
//     var name = 'sample_fs/sample_' + i;
//     var content = 'sample_content' + i;
//     fs.writeFileSync(name, content);
// }

// var myWallet        = require('./wallet');
//var myBlock   = require('.src/blockchain');
// var walletReference = myWallet.generateWallet();
// myWallet.saveWallet(walletReference);

// // get HTML element by ID identificator
// document.getElementById("wallet-id").innerHTML = walletReference.id;

// // get amount data
// document.getElementById("wallet-amount").innerHTML = walletReference.amount;

// var uiWalletTransaction = document.getElementById("wallet-transaction-panel");

// // get active wallet collection 
// var walletCollection = myBlockchain.syncWalletCollection();




// var slidebar=document.getElementById("currencySlidebar");
// var walletCollection=block.syncWalletCollection();

//  var stringBuilder   = [];
//  var template        = '';
//  for(var i = 0; i < walletCollection.length; i++) {

//     var id      = walletCollection[i].id;
     
//      template    = '<div>' + id  + '</div>';
//     stringBuilder.push(template);
//  }

//  uiWalletTransaction.innerHTML = stringBuilder.join('');