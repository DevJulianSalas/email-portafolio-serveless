'use strict';
const sendEmail = require('./email')

module.exports.test = async(event, context, callback) => {
  console.log(event);
  const response = {
    statusCode: 200,
    headers: {
      "x-custom-header" : "My Header Value"
    },
    body:JSON.stringify({'message': 'Hello world'})
  };
  callback(null, response)
}


module.exports.send = async (event, context) => {
  console.log(event)
  sendEmail(event)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};
