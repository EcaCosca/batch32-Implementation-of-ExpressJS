// EXERCISE 6
let express = require('express')
let methodOverride = require('method-override')
let app = express()

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))

var xhr = new XMLHttpRequest()
xhr.onload = onload
xhr.open('get', '/', true)
xhr.setRequestHeader('X-HTTP-Method-Override', 'PUT')
xhr.send()

function onload () {
  alert('got response: ' + this.responseText)
}