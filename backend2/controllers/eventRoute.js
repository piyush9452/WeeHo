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
router.get("/getEvents", async (req, res) => {

    try {

        const {
            status,
            search,
            sort = "NEWEST",
            page = 1,
            limit = 10
        } = req.query;

        const filter = {};

        if (status && status !== "ALL") {
            filter.status = status;
        }

        if (search) {
            filter.organization = {
                $regex: search,
                $options: "i"
            };
        }

        let sortQuery = { createdAt: -1 };

        if (sort === "OLDEST")
            sortQuery = { createdAt: 1 };

        if (sort === "AZ")
            sortQuery = { organization: 1 };

        const currentPage = Number(page);
        const pageLimit = Number(limit);

        const totalEvents = await Event.countDocuments(filter);

        const events = await Event.find(filter)
            .sort(sortQuery)
            .skip((currentPage - 1) * pageLimit)
            .limit(pageLimit);

        res.json({
            success: true,
            events,
            currentPage,
            totalPages: Math.ceil(totalEvents / pageLimit),
            totalEvents,
            hasNextPage: currentPage < Math.ceil(totalEvents / pageLimit),
            hasPrevPage: currentPage > 1
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

export default router;