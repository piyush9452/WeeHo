import Admin from "../models/admin.js";
import Event from "../models/event.js";
import Performer from "../models/performer.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";

const otpStore = new Map();

export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password ,otp} = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const data = otpStore.get(email);

        if (!data)
            return res.status(400).json({
                message: "OTP not found"
            });

        if (Date.now() > data.expires) {

            otpStore.delete(email);

            return res.status(400).json({
                message: "OTP expired"
            });

        }
        if (data.otp !== otp)
            return res.status(400).json({
                message: "Invalid OTP"
            });


        

        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const admin = new Admin({
            name,
            email,
            password:hashedPassword
        });
        await admin.save();
 otpStore.delete(email);

        res.status(201).json({
            success: true,
            message: "Admin registered successfully.",
            admin:admin
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
            
        });
    }
};


export const loginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const token = jwt.sign(
            {
                id: admin._id,
                email: admin.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

export const updateEventStatus = async(req,res) => {
     try {
        const { id } = req.params;
        const { status } = req.body;

        const allowedStatus = ["PENDING", "APPROVED", "REJECTED"];

        if (!allowedStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status."
            });
        }

        const event = await Event.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found."
            });
        }

        res.status(200).json({
            success: true,
            message: `Event ${status.toLowerCase()} successfully.`,
            event
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updatePerformerStatus = async(req,res) =>{
     try {
        const { id } = req.params;
        const { status } = req.body;

        const allowedStatus = ["PENDING", "APPROVED", "REJECTED"];

        if (!allowedStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status."
            });
        }

        const performer = await Performer.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!performer) {
            return res.status(404).json({
                success: false,
                message: "Performer not found."
            });
        }

        res.status(200).json({
            success: true,
            message: `Performer ${status.toLowerCase()} successfully.`,
            performer
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const sendOtp = async (req, res) => {

    try {

        const { email , secretKey} = req.body;

        if (!email || !secretKey)
            return res.status(400).json({
                message: "Email required"
            });
if (secretKey !== process.env.ADMIN_SECRET_KEY) {
            return res.status(403).json({
                success: false,
                message: "Invalid Secret Key."
            });
        }
        const exists = await Admin.findOne({ email });

        if (exists)
            return res.status(400).json({
                message: "Admin already exists"
            });

        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        otpStore.set(email, {
            otp,
            expires: Date.now() + 5 * 60 * 1000,
            resendAfter: Date.now() + 60 * 1000 
        });

        await sendMail(email, otp);

        res.status(200).json({
            message: "OTP sent successfully"
        });

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

export const resendOtp = async (req, res) => {
    try {
        const { email, secretKey } = req.body;

        if (!email || !secretKey) {
            return res.status(400).json({
                success: false,
                message: "Email and Secret Key are required."
            });
        }

        if (secretKey !== process.env.ADMIN_SECRET_KEY) {
            return res.status(403).json({
                success: false,
                message: "Invalid Secret Key."
            });
        }

        const data = otpStore.get(email);

        if (!data) {
            return res.status(400).json({
                success: false,
                message: "Please request an OTP first."
            });
        }

        const now = Date.now();

        if (now < data.resendAfter) {
            const secondsLeft = Math.ceil((data.resendAfter - now) / 1000);

            return res.status(429).json({
                success: false,
                message: `Please wait ${secondsLeft} seconds before requesting another OTP.`
            });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        otpStore.set(email, {
            otp,
            expires: now + 5 * 60 * 1000,
            resendAfter: now + 60 * 1000
        });

        await sendMail(email, otp);

        return res.status(200).json({
            success: true,
            message: "OTP resent successfully."
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};