const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const port = 8080
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(expressLayouts)

app.get('/', (req, res) => {
	// res.send("Homepage")
	// res.sendFile(path.join(__dirname+'/public/index.html'))
	res.render('pages/home', {
		page: 'Home'
	})
})

app.get('/about', (req, res) => {
	// res.send("About us")
	// res.sendFile(path.join(__dirname+'/public/about.html'))
	res.render('pages/about', {
		page: 'About'
	})
})

app.get('/contact', (req, res) => {
	// res.send("Contact us")
	// res.sendFile(path.join(__dirname+'/public/contact.html'))
	res.render('pages/contact', {
		page: 'Contact'
	})
})

app.listen(port, (err) => {
	if(err)
		throw err
	console.log("All the magic is happening on port: ", port)
})
