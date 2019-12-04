var syncWalletCollection = function() {

    // HTTP request over the network 

    // Get all wollet artefacts

    // return all wallets
    return [
        {
            id      : 'abcd',
            amount  : 0
        },
        {
            id      : 'vvwd',
            amount  : 10
        },
        {
            id      : 'ttgf',
            amount  : 100
        }
    ];
};

var syncCurrencyCollection = function() {

    return [
        {
            name      : 'Leva'           
        },
        {
            name      : 'Dollar',
            
        },
        {
            name     : 'Euro',
           
        },
        {
            name     : 'Pound',
           
        }
    ];
};



module.exports = {
    syncWalletCollection : syncWalletCollection,
    syncCurrencyCollection: syncCurrencyCollection
}