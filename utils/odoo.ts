import Odoo from 'odoo-xmlrpc';

const BACKENDURL = process.env.URL || 'http://localhost:8069';

const USERNAME = process.env.USERNAME || 'admin';
const PASSWORD = process.env.PASSWORD || 'admin';
const DB = process.env.DB || 'NLL';

const parsedURL = new URL(BACKENDURL);
const {protocol, host, port} = parsedURL

export const odoo = new Odoo({
    url: `${protocol}://${host}`,
    port,
    db: DB,
    username: USERNAME,
    password: PASSWORD
});