const config = require('../config.json');
const axios = require("axios");
const cron = require("node-cron");
const User = require('./models/User.js');    

const hour = config.userImport.hour;
const minute = config.userImport.hour;
const cronTime = minute+' '+ hour + ' '+ '* * *';

async function insertUsers(number){
    try {
        let itens = await importUsersFromRandomUserApi(number);
        User.create(itens, function (err, results) {
            err ? console.log(err) : console.log('Users inserted in MongoDB: '+ results.length);
        });
    } catch (error) {
        console.log(error);
    }
};

async function importUsersFromRandomUserApi(results){
    let res = await axios.get('https://randomuser.me/api/?results='+results);
    let users = [];
    let props = {
        "status": "draft",
        "imported_t": new Date()
    };
    res.data.results.forEach(result => {
        let user = Object.assign(result, props)
        users.push(user);
    });
    return users;
};

const task = cron.schedule( cronTime, () =>{
    insertUsers(10);
});

module.exports = task;


    


