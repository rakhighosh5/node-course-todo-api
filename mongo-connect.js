const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
if(err)
{
    return console.log('Unable to connect to server ');
}
else
{
    console.log('Connected to Mongo DB');
    db.collection('Todos').insertOne({
    text:'Something To Do',
    completed: false
    },(err,result) => {
        if(err)
        {
            return console.log('Unable to return data');
        }

console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('Users').insertOne({
        name: 'Amairah',
        age:'24',
        location:'Columbus',
        completed: false
    
    },(err,result)=>{
        if(err)
        {
            return console.log('Unable to connect to Users');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.collection('Users').insertOne({
        _id: 124,
        name: 'Amey',
        age:'24',
        location:'Columbus',
        completed: false
    
    },(err,result)=>{
        if(err)
        {
            return console.log('Unable to connect to Users');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimeStamp());
    });
}
db.close();
});