//СТРУКТУРА
use bank
db.createCollection('Employees')
db.createCollection('Departments')
db.createCollection('Clients')
db.createCollection('BankAccounts')

db.Departments.insert({
    name          : 'Operations'
})
db.Departments.insert({
    name          : 'Credits'
})
db.Departments.insert({
    name          : 'Deposits'
})

db.Departments.insert({
  name          : 'Obslujvane na klienti'
})
db.Departments.insert({
  name          : 'Security'
})
db.Departments.insert({
  name          : 'Softuer'
})
db.Departments.insert({
  name          : 'Upravlenie'
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
     
      var departmentObject=db.Departments.findOne({ name : document.department });
  
      document.department=departmentObject._id
     
  
      // insert data 
      db.Employees.insert(document);

    }
  };

var insertClientWithBankAccount=function(firstName1, secondName1, country1, city1, address1, telephone1, email1, code1){
insertClient(firstName1, secondName1, country1, city1, address1, telephone1, email1, code1);
var ClientObject=db.Clients.find({  firstName: firstName1, secondName: secondName1,  telephone: telephone1});
db.BankAccounts.insertOne({
  code      : ClientObject[0]._id,
  clientId : ClientObject[0]._id,      
  currency  : 'BGN',
  balance : 0
})
};


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
     db.Clients.insert({
      firstName: firstName1, secondName: secondName1,  addressCollection : {   
        country       : country1,
        city          : city1,
        address       : address1}, 
        telephone: telephone1, 
        email: email1
     });
    
     
  };

  var insertBankAccount = function(code1, clientId1, currency1) {
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
    db.BankAccounts.insertOne({
      code      : code1,
      clientId : clientId1,      
      currency  : currency1,
      balance : 0
    })
  };
  
  db.BankAccounts.createIndex( { "code": 1 }, { unique: true } )



insertClientWithBankAccount('Georgi', 'Petrov', 'Bulgaria', 'Sofia', 'XaHkO Brat', '0878123654','georgi@abv.bg','dsadsagfdgfdu1231321')



var generateFname = function() {
  var collection = ['Mihail', 'Ivan', 'Serioja', 'Nikola', 'Vladimir', 'Anastasija', 'Ekaterina'];

  var index = Math.floor((Math.random() * (7 -1) + 1));
  return collection[index]
}

var generateLname = function() {
  var collection = ['Petrov', 'Ivanov', 'Jozik', 'Toskov', 'Putin', 'Kozareva', 'Velika'];

  var index = Math.floor(Math.random() * (7 - 1) + 1);
  return collection[index];
}
var generateCity = function() {
  var collection = ['Plovdiv', 'Sofia', 'Varna', 'Burgas', 'Stara Zagora', 'Dimitrovgrad', 'Nesebar'];

  var index = Math.floor(Math.random() * (7 - 1) + 1);
  return collection[index];
}
var generateAddress = function() {
  var collection = ['han Asparuh', 'hanko Brat', 'Kubrat Pulev', 'Glavnata', 'Simeon Veliki', 'Artemida', 'Evridika'];

  var index = Math.floor(Math.random() * (7 - 1) + 1);
  return collection[index];
}
var generateTelephone = function() {
  var collection = ['08785486454', '06487678678', '0987687678', '06876876546', '06876546574', '06879654354', '0998899354'];

  var index = Math.floor(Math.random() * (7 - 1) + 1);
  return collection[index];
}
var generateEmail = function() {
  var collection = ['qkata@mail.bg', 'muskula@abv.bg', 'sexymace@gmail.com', 'ribarq@.abv.bg', 'badman@mail.bg', 'spiderman@gmail.com', 'moqtimeil@mail.com'];

  var index = Math.floor(Math.random() * (7 - 1) + 1);
  return collection[index];
}
var generatePosition = function() {
  var collection = ['Nachalnik', 'Chef', 'Chiastach', 'Krediten inspektor', 'Kasier', 'Ohrana', 'Programist'];

  var index = Math.floor(Math.random() * (7 - 1) + 1);
  return collection[index];
}
var generateDepartment = function() {
  var collection = ['Operations', 'Credits', 'Deposits', 'Obslujvane na klienti', 'Security', 'Softuer', 'Upravlenie'];

  var index = Math.floor(Math.random() * (7 - 1) + 1);
  return collection[index];
}

for(i = 0; i < 10; i++) {
 
    dbe.insert({ 
      firstName: generateFname(), 
      secondName: generateLname(),  
      addressCollection : {   
      country       : 'Bulgaria',
      city          : generateCity(),
      address       : generateAddress()}, 
      telephone: generateTelephone(), 
      email: generateEmail(), 
      position: generatePosition(), 
      department:generateDepartment()
  
  });
}

dbe.insert({
  firstName: 'Jan',
  secondName: 'Klod',
  additionalName: 'Van Damme',
  addressCollection : {   
    country       : 'Bulgaria',
    city          : generateCity(),
    address       : generateAddress()}, 
    telephone: generateTelephone(), 
    email: generateEmail(), 
    position: generatePosition(), 
    department:generateDepartment()
});

//Бизнес заявки част 1

//1. Да се създаде листинг на имената на всички отдели в банката 

db.Departments.find({}, {name:1, _id:0})

//2. Да се създаде листинга на месечните възнаграждения на всички служители, в листинга е
//необходимо да присъстват двете имена на служителя и неговата заплата

db.Employees.find().forEach(function(document) {
  
  
  db.Employees.update({ _id : document._id},{
    $set:{
    salary: 1000.50
    }
  })
})

db.Employees.find({}, {firstName:1, secondName:1, salary:1, _id:0})

//3. Да се създаде листинг на всички служители в банката в листинга трябва да присъстват
//двете имена на служителите и новогенерирани E-mail адреси, които да се състоят от
//конкатенирани първото и второ име на служителя разделени с точка. Имената на
//служителите трябва да бъдат с малки букни в мейла. Домейна на компанията е
//bankoftomarow.bg

db.Employees.find().forEach(function(document) {
  var ime=document.firstName.toLowerCase();
  var familiq=document.secondName.toLowerCase();
  
  db.Employees.update({ _id : document._id},{
 $set:{
    email2: ime+'.'+familiq+'@bankoftomarow.bg'
 }
  })
})

db.Employees.find({}, {firstName:1, secondName:1, email2:1, _id:0})

//4. Намерете всички служители които банката дефинира като старши служители. Старши
//служители са всички които работят в компанията от 5 години.

db.Employees.find().forEach(function(document) {
  
  
  db.Employees.update({ _id : document._id},{
   $set:{
    appointment: new Date('Jun 1, 2010')
  }
  })
})

db.Employees.find({firstName: 'Ivan'}).forEach(function(document) {
  
  
  db.Employees.update({ _id : document._id},{
    $set:{
     appointment: new Date('Jun 1, 2018')
   }
   })
 })

db.Employees.find({
   
  appointment : {
    $gt: new Date(new Date().setDate(new Date().getDate()-1825))
  }
})

//5. Намерете всички служители чиито първи имена започват с буквата S

db.Employees.find({firstName: /^S/})

//6. Намерете всички чуждестранни служители. Чуждестранни са тези служители които не са
//родени в България.

db.Employees.find().forEach(function(document) {
  
  
  db.Employees.update({ _id : document._id},{
    $set:{
  birthCountry: 'Bulgaria'
    }
})
})


db.Employees.find({firstName: 'Nikola'}).forEach(function(document) {
  
  
  db.Employees.update({ _id : document._id},{
  $set:{
  birthCountry: 'Spain'
  }
})
})

db.Employees.find({birthCountry : {$nin: ['Bulgaria']}}).pretty()

//7. Намерете всички служители чиите имена (първо / второ или допълнително съдържат
// буквата l)
  
db.Employees.find({
  $or : [
    { firstName : /.*l.*/ },
    { secondName : /.*l.*/ },
    { additionalName : /.*l.*/ }
  ] 
}).pretty()

//Бизнес заявки част 2

//1. Да се реализират примерни документи в колекцията.

db.createCollection('HistoryD')

