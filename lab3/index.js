// ./index.js

const http = require('http')
const handles = require('./handles')
const birds = require('./birds')
const dsi = require('./dsi')
const server = http.createServer(birds.serverHandle);



app.use('/api',dsi)

