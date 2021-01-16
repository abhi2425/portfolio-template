const express = require('express')
const path = require('path')
const hbs = require("hbs")
const home = require("./routers/home")
const bodyParser = require('body-parser')

const app = express()


const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.use(express.json({
    limit: "1mb"
}))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set("views", viewsPath)
hbs.registerPartials(partialPath)
app.use(home)



app.listen(port, () => {
    console.log("Server Up At-:", port)
})