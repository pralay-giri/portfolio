import { sendEmail } from "../core/mail.js";
import transpoter from "../utils/transpoter.js";

const TRANSPOTER = transpoter();

export const sendEmailController = (req, res, next) => {
    try {
        const body = req.body;

        console.log(body);

        res.status(200).json("ok");

        // sendEmail;
    } catch (error) {
        next(error);
    }
};
