import express from 'express'
import Event from '../models/event.js';

const router = express.Router()

router.post("/event", async (req, res) => {
    try {
        const {organization,email,activityType,targetAudience,eventType,date} = req.body;

        // Validation
        if (!organization||!email||!activityType||!targetAudience||!eventType||!date) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

      
        const event = new Event({
          organization,email,activityType,targetAudience,eventType,targetAudience,date
        });

        await event.save();

        return res.status(201).json({
            success: true,
            message: "Event created successfully",
            event,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
});

export default router;