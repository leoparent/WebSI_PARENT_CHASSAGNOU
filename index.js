// Import a module
const http = require('http')
const handles = require('./handles')
const url = require('url')
const qs = require('querystring')

const server = http.createServer(handles.serverHandle);
  server.listen(8080)