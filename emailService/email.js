const nodemailer = require('nodemailer')
const {pass} = require('../config/key')


const sentMail = ({name , email , desc})=>{

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sumansaw071999@gmail.com',
          pass: pass
        }
      });
      
      var mailOptions = {
        from: email,
        to: 'sumansaw81@gmail.com',
        subject: 'Sending Email by Portfolio',
        text: desc + ` Email of recruiter: ${email}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = sentMail