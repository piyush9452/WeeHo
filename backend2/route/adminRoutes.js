import express from "express";
import { registerAdmin, loginAdmin, updateEventStatus, updatePerformerStatus, sendOtp, resendOtp } from "../controllers/admin.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/eventStatus", updateEventStatus);
router.post("/performerStatus", updatePerformerStatus);
router.post("/sendOtp", sendOtp);
router.post("/resendOtp", resendOtp);

export default router;