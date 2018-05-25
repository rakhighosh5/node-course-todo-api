const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err)
{
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Users').find({ name: 'Reyansh'}).toArray().then((count) => {
        console.log('Todos');
      
        console.log(JSON.stringify(count,undefined,2));
    },(err)=>{
     console.log('Unable  to fetch Todos', err)
    });
    db.close();
});