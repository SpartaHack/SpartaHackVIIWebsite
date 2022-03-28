// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require('cors')({ origin: true });

//create and config transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  },
});

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
  //for testing purposes
  console.log(
    'from sendEmail function. The request object is:',
    JSON.stringify(req.body)
  );

  //enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    //get contact form data from the req and then assigned it to variables
    const id = req.body.data.id;
    const name = req.body.data.name;
    const message = req.body.data.message;

    admin.auth().getUser(id).then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully fetched user data:', userRecord.toJSON());
        const email = userRecord.toJSON().email;
        console.log(email);
        //config the email message
        const mailOptions = {
            from: 'SpartaHack <hello@spartahack.com>',
            to: email,
            subject: 'Congratulations!',
            html: {path: 'https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/templates%2Findex.html?alt=media&token=b5c23e94-1d23-41ef-b3ab-b7b13c37e307'},
            attachments: [{
              filename: 'image-1.png',
              path: 'https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/templates%2Fimages%2Fimage-1.png?alt=media&token=ca9a211f-9292-4a05-bae0-33b598fe291d',
              cid: 'image-1'
            },
            {
              filename: 'image-2.png',
              path: 'https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/templates%2Fimages%2Fimage-2.png?alt=media&token=ea94d243-1456-4a03-811c-510f1fb499b1',
              cid: 'image-2'
            },
            {
              filename: 'image-3.png',
              path: 'https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/templates%2Fimages%2Fimage-3.png?alt=media&token=9911120d-6bc4-48d2-94ea-4721eba762c9',
              cid: 'image-3'
            },
            {
              filename: 'image-5.png',
              path: 'https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/templates%2Fimages%2Fimage-5.png?alt=media&token=7c3dd8b0-61bd-4ead-82fb-e47582e940e1',
              cid: 'image-5'
            },
            {
              filename: 'image-6.png',
              path: 'https://firebasestorage.googleapis.com/v0/b/spartahack-2022-production.appspot.com/o/templates%2Fimages%2Fimage-6.png?alt=media&token=13394a7e-3aac-414a-b9b8-301d5e7f8f1a',
              cid: 'image-6'
            }],
            replyTo: 'hello@spartahack.com'
        };

        //call the built in `sendMail` function and return different responses upon success and failure
        return transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return res.status(500).send({
              data: {
                  status: 500,
                  message: error.toString(),
              },
              });
          }
          
          // change the approved field in user
          admin.firestore().collection('users').doc(id).update({
              approved: true
          });
          return res.status(200).send({
              data: {
              status: 200,
              message: 'sent',
              },
          });
        });
    }).catch(function(error) {
        console.log('Error fetching user data:', error);
    });
  });
});
