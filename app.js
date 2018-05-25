console.log('Starting app.js...');

const fs=require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notesValue = require('./notes.js');

const argv=yargs.argv;
var command = process.argv[2];

console.log('Command:',command);
console.log('Process',process.argv);
console.log('Yargs',argv);

if(command === 'add')
{
    notesValue.addNote(argv.title,argv.body);

    console.log(argv.title,argv.body);
}
else if(command === 'list')
{
    notesValue.getAll();
}
else if(command === 'read')
{
    notesValue.readNote(argv.title);
}
else if(command === 'delete')
{
    notesValue.removeNote(argv.title);
}
else
{
    console.log('No Args');
}
