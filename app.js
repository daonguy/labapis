var express = require('express')
var app = express()

app.get('/getProducts', function(req, res) {
  
  res.send([
  		{
  			name: "Watson Analytics", 
  			status: "available",
  			platform: "Watson Developer Cloud"
  		},
  		{
  			name: "Watson Discovery", 
  			status: "beta",
  			platform: "Bluemix"
  		},
  		{
  			name: "Watson Conversation", 
  			status: "available",
  			platform: "Bluemix"
  		}])
})
app.listen(8080, function() {
  console.log('Product app is listening on port 8080.')
})
