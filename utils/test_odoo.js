const Odoo = require('odoo-xmlrpc');
const {config} = require('dotenv');
config({path: '../.env.local'});
const BACKENDURL = process.env.BACKEND || 'http://localhost:8069';

const NAME = process.env.NAME || 'admin';
const PASSWORD = process.env.PASSWORD || 'admin';
const DB = process.env.DB || 'NLL';

const parsedURL = new URL(BACKENDURL);
const {protocol, hostname, port} = parsedURL
const PORT = port || '80' 
console.log({
    url: `${protocol}//${hostname}`,
    port: PORT,
    db: DB,
    username: NAME,
    password: PASSWORD
})
const odoo = new Odoo({
    url: `${protocol}://${hostname}`,
    port,
    db: DB,
    username: NAME,
    password: PASSWORD
});

odoo.connect((err) => {
    if(err) return console.log(err);
    return console.log("Successful");
})