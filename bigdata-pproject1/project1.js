use bank
db.createCollection('employees')
db.createCollection('departments')
db.createCollection('clients')
db.createCollection('bankAccounts')

db.departmets.insert({
    name          : 'Operations'
})
db.departmets.insert({
    name          : 'Credits'
})
db.departmets.insert({
    name          : 'Deposits'
})

var dbe = {
    insert : function(document) {
  
      
      if(!document.firstName) {
  
        print('Property *firstName* is required');
       return; 
      }
  
      if(!document.secondName) {
        print('Property *secondName* is required')
        return;
      }
      if(!document.addressCollection.country) {
        print('Property *country * is required')
        return;
      }
      if(!document.addressCollection.city) {
        print('Property *city* is required')
        return;
      }
      if(!document.addressCollection.address) {
        print('Property *address* is required')
        return;
      }
      if(!document.telephone) {
        print('Property *telephone* is required')
        return;
      }
      if(!document.email) {
        print('Property *email* is required')
        return;
      }
      if(!document.position) {
        print('Property *position* is required')
        return;
      }
      if(!document.department) {
        print('Property *department* is required')
        return;
      }
     
      var departmentObject=db.departments.findOne({ name : document.department });
  
      document.department=departmentObject._id
     
  
      // insert data 
      db.users.insert(document);

    }
  };

  dbe.insert({ firstName: 'Koljo Mamata', secondName: 'Koljo Mamata',  addressCollection : {   
    country       : 'Bulgaria',
    city          : 'Plovdiv',
    address       : 'Bjalo more'
  }, telephone: '321321', email: 'fdsfds', position: 'fdsfds', department:'Credits'

});








var dbc2 = {
    insert : function(document) {
  
      
      if(!document.firstName) {
  
        print('Property *firstName* is required');
       return; 
      }
  
      if(!document.secondName) {
        print('Property *secondName* is required')
        return;
      }
      if(!document.addressCollection.country) {
        print('Property *country * is required')
        return;
      }
      if(!document.addressCollection.city) {
        print('Property *city* is required')
        return;
      }
      if(!document.addressCollection.address) {
        print('Property *address* is required')
        return;
      }
      if(!document.telephone) {
        print('Property *telephone* is required')
        return;
      }
      if(!document.email) {
        print('Property *email* is required')
        return;
      }
      
  
      // insert data 
     db.Clients2.insert(document);

     insertBankAccount2({code: document._id, clientId: document._id, currency: "BGN"})
    
    }
  };

  var insertBankAccount2 = function(code, clientId, currency) {
    if(!code){
        return;
    }
    if(!clientId){
        return;
    }
    var currencyVar
    if(!currency){
        currencyVar='BGN'       
    }
    db.bankAccounts2.insert({
      code      : code,
      clientId : clientId,      
      currency  : currencyVar
    })
  };
  
  db.bankAccounts2.createIndex( { "code": 1 }, { unique: true } )



  dbc2.insert({ firstName: 'Koljo Mamata', secondName: 'Koljo Mamata',  addressCollection : {   
    country       : 'Bulgaria',
    city          : 'Plovdiv',
    address       : 'Bjalo more'
  }, telephone: '321321', email: 'fdsfds'

});
