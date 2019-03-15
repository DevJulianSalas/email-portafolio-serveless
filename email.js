"use strict";
const nodemailer = require('nodemailer')
const configTransport = require('./configTransport')

async function send(message){
  let transporter = nodemailer.createTransport(configTransport);
  let info = await transporter.sendMail(message)
  console.log(info)
  console.log('Message sent: %s', info.messageId)
}

export default send;