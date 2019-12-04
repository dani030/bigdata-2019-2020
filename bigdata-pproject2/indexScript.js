

var fs = require('fs');
var util = require('./util/util');
var wallet=require('./src/wallet');



    const login = document.getElementById("loginForm");
    login.addEventListener("submit", function(event) {
    event.preventDefault();
    const walletId = document.getElementById("walletId").value;
    //console.log(walletId);   
    if (!fs.existsSync('wallets/'+walletId)) {
        console.log('User with that walletId not exists.');
      }
    else{
      var walletObject=JSON.parse(fs.readFileSync('wallets/'+walletId, 'utf8'));
      
    document.getElementById("walletId").value='';
    
    window.location.href="slidebar.html";
    
    console.log('You are login successfully');
    console.log('You have '+walletObject.amount+' coins');
     

    }
   
  });
  