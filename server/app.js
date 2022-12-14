const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const chalk = require('chalk');
const initDatabase = require('./startUp/initDatabase.js');
const routes = require('./routes/index.js');
 const app = express();

 app.use(express.json());
 app.use(express.urlencoded({extended: false}));

 app.use('/api', routes);

if(process.env.NODE_ENV === "production"){
    console.log('production');
}else{
    console.log('development');
}
const PORT = config.get('port') ?? 8080;


 async function start(){
    try{
        mongoose.connection.once('open', () => {

            initDatabase();
        });
        await mongoose.connect(config.get('mongoUri'));
        app.listen(8080, () =>{
            console.log(chalk.green(`Server has been started on port ${PORT}`));
        });
    } catch(e){
        console.log(chalk.red(e.message));
        process.exit(1);
    }
 }
start();