import sendgrid from '@sendgrid/mail'

export default (app) => {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

    app.post('/contact', (req, res) => {
        sendgrid.send({
            to: process.env.SENDGRID_ENQUIRY_EMAIL,
            from: req.body.email,
            subject: 'Website Enquiry',
            text: req.body.message,
        }).then((response) => {
            res.status(200)
            res.send('sent')
            res.end()
        }).catch((error) => {
            res.status(error.code)
            res.send(error.response.message)
            res.end()
        })
    });
}