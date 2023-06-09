import Odoo from 'odoo-xmlrpc';

const BACKENDURL = process.env.BACKEND || 'http://localhost:8069';

const NAME = process.env.NAME || 'admin';
const PASSWORD = process.env.PASSWORD || 'admin';
const DB = process.env.DB || 'NLL';

const parsedURL = new URL(BACKENDURL);
const {protocol, hostname, port} = parsedURL
console.log({
    url: `${protocol}//${hostname}`,
    port,
    db: DB,
    username: NAME,
    password: PASSWORD
})
export const odoo = new Odoo({
    url: `${protocol}://${hostname}`,
    port,
    db: DB,
    username: NAME,
    password: PASSWORD
});