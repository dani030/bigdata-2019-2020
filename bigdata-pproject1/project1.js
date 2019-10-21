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








var insertClient = function(firstName1, secondName1, country1, city1, address1, telephone1, email1, code1) {
  
      
      if(!firstName1) {  
        print('Property *firstName* is required');
       return; 
      }
  
      if(!secondName1) {
        print('Property *secondName* is required')
        return;
      }
      if(!country1) {
        print('Property *country * is required')
        return;
      }
      if(!city1) {
        print('Property *city* is required')
        return;
      }
      if(!address1) {
        print('Property *address* is required')
        return;
      }
      if(!telephone1) {
        print('Property *telephone* is required')
        return;
      }
      if(!email1) {
        print('Property *email* is required')
        return;
      } 
      if(!code1) {
        print('Property *code* is required')
        return;
      }                 
      
      // insert data 
     db.Clients2.insert({
      firstName: firstName1, secondName: secondName1,  addressCollection : {   
        country       : country1,
        city          : city1,
        address       : address1}, 
        telephone: telephone1, 
        email: email1
     });
     
     db.bankAccounts2.insertOne({
      code      : code1,
      clientId : code1,      
      currency  : 'BGN'
    })
     
  };

  var insertBankAccount2 = function(code1, clientId1, currency1) {
    if(!code){
       return;
   }
   if(!clientId){
        return;
    }
    var currencyVar=currency1
    if(!currency){
        currencyVar='BGN'       
    }
    db.bankAccounts2.insertOne({
      code      : code1,
      clientId : clientId1,      
      currency  : currency1
    })
  };
  
  db.bankAccounts2.createIndex( { "code": 1 }, { unique: true } )



  dbc2.insert({ firstName: 'Jivko', secondName: 'Jivkov',  addressCollection : {   
    country       : 'Bulgaria',
    city          : 'Plovdiv',
    address       : 'Bjalo more'
  }, telephone: '99999999', email: 'aaaaaaaaa'

});

db.bankAccounts2.insert({
  code      : 'dsadsg4543sa',
  clientId : 'fdsfdsfds',      
  currency  : 'frank'
})

insertClient('Mihail', 'Dimitrov', 'USA', 'Los Angeles', 'Obama', '0000022','dsadsa@adsa','IBANDsadsadsa')