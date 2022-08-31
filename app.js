const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const { getData } = require('./dataHandler');
const port = 3000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/getData',function(req, res){
  getData().then((results)=>{
    res.json({
      data: results
    })
  })
});

app.use(express.static('public'))
app.use('/', router);

app.listen(port, () => {
  console.log(`Gherkins Training express app running on http://localhost:3000/getData`)
})