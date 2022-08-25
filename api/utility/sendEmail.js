
import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, text) => {

    try {
        let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "6fc3faf557e925",
              pass: "bcb2e15dc440cd"
            }
          });

 

        transport.sendMail({
            from : '',
            to : to,
            subject : subject,
            text : text
        })

    } catch (error) {
        console.log(error)
    }
}