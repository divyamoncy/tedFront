const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
//nodemailer
const nodemailer = require('nodemailer');
var config = {
    apiKey: "AIzaSyDoxwgAzSpGoweNYZENf-hqJSu67BX6jTA",
    authDomain: "tedxcet-44d2f.firebaseapp.com",
    databaseURL: "https://tedxcet-44d2f.firebaseio.com",
    projectId: "tedxcet-44d2f",
    storageBucket: "tedxcet-44d2f.appspot.com",
    messagingSenderId: "205375673772"
  };

//firebase.initializeApp(config);


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

exports.sendMail = functions.database.ref('/messages/{pushId}/email')
  .onCreate(event => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
          service:'Gmail', // true for 465, false for other ports
            auth: {
                user: "tedxcet2017@gmail.com", // generated ethereal user
                pass: "tedxcet2017ocaccess"  // generated ethereal password
            }
        });
        console.log('events',event.data.val());
        var email = event.data.val();
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"TEDxCET" <tedxcet2017@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });

  });
