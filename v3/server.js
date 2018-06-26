const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const port = 8080

app.set('view engine', 'html');

app.use(morgan('dev'));

app.get('/', (req, res) => {
	// res.send("Homepage")
	res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.get('/about', (req, res) => {
	// res.send("About us")
	res.sendFile(path.join(__dirname+'/public/about.html'))
})

app.get('/contact', (req, res) => {
	// res.send("Contact us")
	res.sendFile(path.join(__dirname+'/public/contact.html'))
})

app.listen(port, (err) => {
	if(err)
		throw err
	console.log("All the magic is happening on port: ", port)
})
