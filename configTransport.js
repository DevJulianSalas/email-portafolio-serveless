"use strict";
export default configTransport = {
  host: 'smtp.gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.user,
    pass: process.env.password
  }
}