// ./handles.js
// Necessary imports
const url = require('url')
const qs = require('querystring')
const {readFileSync}=require('fs')


module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
    const user = JSON.parse(readFileSync("./content/about.json",'utf-8'));
    res.writeHead(200, {'Content-Type': 'text/plain'});
  
    if (path === '/hello' && 'name' in params) {
      res.write('Hello ' + params['name'])
      if(params['name']=== 'leo')
      {
        res.write('\n')
        res.write('vous etes sur le lab de leo et pa')
      }

    } else {
      
    }
    res.write('\n') 
    res.write(user.title)
    res.write('\n') 
    res.write(user.content)
    res.write('\n')
    res.write(user.author)
    res.write('\n')
    res.write(user.date)
    res.end();
  }
}