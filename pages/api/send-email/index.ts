import { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()


type Data = {
    message: string
}

// TODO: si está implementando la aplicación en un sitio en vivo, ¡recuerde incluir su contraseña como una variable de entorno!

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // if(req.body.name.trim().length === 0) res.status(400).json({message: 'peto la app'})
    // if(req.body.email.trim().length === 0) throw new Error('email is required')
    // if(req.body.message.trim().length < 10) throw new Error('The message is required and must have a minimum of 10 letters')
    
    try {
        let nodemailer = require('nodemailer')
        const password = process.env.PASSWORD
        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: 'paspiazusabando@gmail.com',
                pass: password,
            },
            secure: true,
        })
        
        const mailData = {
            from: 'paspiazusabando@gmail.com',
            to: 'paspiazusabando@gmail.com',
            subject: `Message From ${req.body.name}`,
            text: `${req.body.message} | Sent from: ${req.body.email}`,
            html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
        }
    
        transporter.sendMail(mailData, (err: string, info: {}) => {
            if(err){
                console.log(err)
            } else{
                console.log(info)
            }
        })
    
        res.status(200).json({ message: 'ok' })
    } catch (error) {
        console.log(error)
    }
    
}