var fs = require('fs');

var generateWallet = function(walletId) {

    return {
        id      : walletId,
        amount  : 0
    };
};


var saveWallet = function(walletObject, walletId) {

    var walletStringRepresentation = JSON.stringify(walletObject);
    var path='wallets/'+walletId;

    if (fs.existsSync(path)) {
        console.log('User with same email and password exists.');
      }
else{
    fs.writeFileSync(path, walletStringRepresentation);
    console.log('Your registration has been successful!')
}
};

module.exports = {
    generateWallet  : generateWallet,
    saveWallet      : saveWallet
}

// # Valid way of writing exports
// module.exports = {
//     generateWallet  : genefunction() {

//         return {
//             id      : 'Mihail Petrov',
//             amount  : 0
//         };
//     }ateWallet,
//     saveWallet      : function(walletObject) {
//         fs.writeFileSync('_meta/_wallet', walletObject);
//     }
// }