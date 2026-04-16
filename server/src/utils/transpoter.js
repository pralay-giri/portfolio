import nodemailer from "nodemailer";

// Create a reusable transporter instance
export default () => {
    return nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
};
