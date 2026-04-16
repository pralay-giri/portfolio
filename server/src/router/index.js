import { Router } from "express";
import { sendEmailController } from "../controllers/email.js";

const router = Router();

router.post("/send-gmail", sendEmailController);

export default router;
