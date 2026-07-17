import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD
    }
});

export const sendMail = async (email, otp) => {
    try {
        await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "OTP Verification",
        html: `
            <h2>WEEHO</h2>

            <p>Your OTP is</p>

            <h1>${otp}</h1>

            <p>OTP expires in 5 minutes.</p>
        `
    });
    } catch (error) {
        console.log(error)
    
    }

    

};

export default transporter;