/**
 * Sends an email using Nodemailer.
 *
 * @param {string} from - The sender's email address.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The email subject.
 * @param {string} text - The plain text content of the email.
 * @param {string} [html] - The HTML content of the email (optional).
 */
export const sendEmail = async (
    transporter,
    { from, to, subject, text, html }
) => {
    try {
        const mailOptions = {
            from, // Sender address
            to, // Recipient address
            subject, // Subject line
            text, // Plain text body
            html, // HTML body (optional)
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: %s", info.messageId);

        return info;
    } catch (error) {
        throw new Error("Error sending email");
    }
};
