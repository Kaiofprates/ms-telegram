'use strict'
const nodemailer = require('nodemailer')

class MailController {
    async sendmail({ request }) {
        /**
         * Configurações do nodemailer
         */
        const {emails, message, from, subject} = request.only(['emails', 'message', 'from', 'subject'])
        const user = process.env.USER_NAME
        const pass = process.env.PASS
    
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
              user,
              pass
            },
            tls: {
              rejecUnauthorized: false
            }
          })
        /**
         *  Enviando email
         */  
        try{
            const retorno = await transporter.sendMail(
                {
                  text: message,
                  subject: subject,
                  from: from,
                  to: emails,
                })
            return { retorno }     
            
        }catch(err){
            return { err } 
        }
    }

    index(){
        return { data: 'Ola mundo'}
    }
}

module.exports = MailController
