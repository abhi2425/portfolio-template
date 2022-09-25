const express = require('express')
//const path = require('path')
const router = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()
//const scss = require("node-sass")
module.exports = router

router.get('/', (_, res) => {
 res.render('home') //----->> OR---->> res.render("./home.hbs")
})

router.get('/skills', (_, res) => {
 res.render('skills')
})
router.get('/education', (_, res) => {
 res.render('education')
})
router.get('/quotes', (_, res) => {
 // const quoteStyle = path.join(__dirname, "../../public/sass/quotes.scss")
 // scss.render({
 //     file: quoteStyle,
 //     outFile: path.join(__dirname, "../../public/css/quotes.css")
 // })
 // const quotePath = path.join(__dirname, "../../templates/views/quotes.html")
 // res.sendFile(quotePath)
 res.render('quotes')
})

router.get('/chatapp', (_, res) => {
 res.render('chatapp')
})

router.get('/darkskyapp', (_, res) => {
 res.render('darkskyapp')
})
router.get('/expensehandler', (_, res) => {
 res.render('expensehandler')
})

router.post('/', (req, res) => {
 let { name, email, subject, message } = req.body
 name = name.toLowerCase()
 email = email.toLowerCase()
 subject = subject.toLowerCase()

 const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: process.env.USER,
   pass: process.env.PASSWORD,
  },
 })

 const mailOptions = {
  from: 'abhiinvirtuallife@gmail.com',
  to: 'abhi.mount.26@gmail.com',
  subject: subject,
  text: `Name-:${name} E-mail-: ${email}
        Message-: ${message} `,
 }

 transporter.sendMail(mailOptions, (error, _) => {
  if (error) {
   console.log(error)
   res.render('./home.hbs', {
    data: 'Error! Message Not Sent.',
   })
  } else {
   res.render('./home.hbs', {
    data: 'Message Sent!',
   })
  }
 })
})

router.get('/*', (_, res) => {
 res.render('./error.hbs')
})
