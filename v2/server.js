const express = require('express')
const app = express()
const app2 = express()
const port = 8080

// app.use((req,res,next)=>{
// 	console.log(req.headers)
// 	next()
// })

app.get('/', (req, res) => {
	res.send("Homepage")
})

app.get('/about', (req, res) => {
	res.send("About us")
})

app.get('/contact', (req, res) => {
	res.send("Contact us")
})

app2.get('/', (req,res)=>{
	res.send("Second Website")
})

app.listen(port, (err) => {
	if(err)
		throw err
	console.log("All the magic is happening on port: ", port)
})

app2.listen(port+1, (err) => {
	if(err)
		throw err
	console.log("Port: ", port)
})