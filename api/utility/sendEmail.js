
import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, text) => {

    try {
        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: "mernstackdev173@gmail.com",
              pass: "afrumtaulvopxpyk"
            }
          });

 

        transport.sendMail({
            from : 'nil.somudra51@gmail.com',
            to : to,
            subject : subject,
            text : text
        })

    } catch (error) {
        console.log(error)
    }
}