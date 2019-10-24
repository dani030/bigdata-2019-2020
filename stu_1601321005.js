use stu_1601321005

db.createCollection('Cars')

var dbCars = {
    insert : function(document) {
  
      
      if(!document.identifikator) {
  
        print('Property *identifikator* is required');
       return; 
      }
  
      if(!document.model) {
        print('Property *model* is required')
        return;
      }
      
    
      db.Cars.insert(document);

    }
  };


  dbCars.insert({
      identifikator: 'BMW',
    model: 'e46'})
    dbCars.insert({
        identifikator: 'Subaru',
      model: 'Impreza'})
      dbCars.insert({
        identifikator: 'Toyota',
      model: 'Supra'})
      dbCars.insert({
        identifikator: 'Mercedes',
      model: 'E63AMG'})
      dbCars.insert({
        identifikator: 'Nissane',
      model: 'GTR'})


      db.Cars.find({}).forEach(function(document) {
  
  
        db.Cars.update({ _id : document._id},{
        $set:{
        placesCount: 2
        }
      })
      })

      db.createCollection('Cargo')

      var dbCargo = {
        insert : function(document) {
      
          
          if(!document.name) {
      
            print('Property *name* is required');
           return; 
          }
      
          if(!document.category) {
            print('Property *category* is required')
            return;
          }
          if(!document.teglo) {
            print('Property *teglo* is required')
            return;
          }
          if(!document.carIdentifikator) {
            print('Property *carIdentifikator* is required')
            return;
          }
          
         
          
         
      
          
          db.Cargo.insert(document);
    
        }
      };

      dbCargo.insert({
        name: 'domati',
        category: 'vegetables',
        teglo: 50,
        carIdentifikator:'Subaru'});
        
        dbCargo.insert({
            name: 'krastavici',
            category: 'vegetables',
            teglo: 20,
            carIdentifikator:'BMW'});
           
            dbCargo.insert({
                name: 'darva',
                category: 'goriva',
                teglo: 150,
                carIdentifikator:'Mercedes'});
               
                dbCargo.insert({
                    name: 'ovca',
                    category: 'meat',
                    teglo: 150,
                    carIdentifikator:'Toyota'});
                    
                    dbCargo.insert({
                        name: 'portokali',
                        category: 'fruits',
                        teglo: 30,
                        carIdentifikator:'Nissane'});


                        var buildCargoCollection = function() {

                            db.Cargo.find().forEach(function(cargoElement) {
                              
                              var cargoCollection = db.Cars.find({identifikator: cargoElement.carIdentifikator}).toArray();    
                              
                              cargoElement.all_cars = cargoCollection;
                              
                               db.cargoCarsAgregation.insert(cargoElement);
                              
                               
                            });
                          }
                          
                          buildCargoCollection()
                          db.cargoCarsAgregation.find().pretty()


                          
                          db.createCollection('priorityCargo')

                          
                          var buildpriorityCargoCollection = function() {

                            db.Cargo.find({ $or: [{category: 'fruits'},{category: 'vegetables'},{category: 'meat'},{category: 'milk and dairy'}]}).forEach(function(cargoElement) {
                              
                                
                              
                              
                              
                               db.priorityCargo.insert(cargoElement);
                               db.Cargo.remove(cargoElement);
                               
                            });
                          }
                          buildpriorityCargoCollection()
                          db.priorityCargo.find().pretty()
                          
                          
                          
                     
                          dbNewCargo=function(name1, category1, teglo1, carIdentifikator1){
                             dbCargo.insert({
                                name: name1,
                                category: category1,
                                teglo: teglo1,
                                carIdentifikator:carIdentifikator1
                             })
                             buildpriorityCargoCollection()
                          }


                          dbNewCargo('qbalki','fruits',20,'Mercedes')

                          dbCargo.insert({
                            name: 'marula',
                            category: 'vegetables',
                            teglo: 60,
                            carIdentifikator:'Nissane'});