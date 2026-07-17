import express from 'express'
import Performer from '../models/performer.js';

const router = express.Router()

router.post('/createPerformer' , async(req , res) => {
    try {
        const {name,email,talent,bio,portfolioLink} = req.body;
        if(!name || !email || !talent || !bio || !portfolioLink) return res.status(400).json({message:'Fill all requirements'})
        const performer = new Performer({
    name , email , talent, bio , portfolioLink
})
        await performer.save()
        return res.status(200).json({message :'Performer created' , performer:performer})
    } catch (error) {
        return res.status(500).json({message: 'Server Error'})
    }
})


router.get("/performers", async (req, res) => {
    try {
        const {
            status,
            page = 1,
            limit = 10
        } = req.query;

        const filter = {};

        if (status) {
            filter.status = status;
        }

        const currentPage = parseInt(page);
        const pageLimit = parseInt(limit);

        const skip = (currentPage - 1) * pageLimit;

        const totalPerformer = await Performer.countDocuments(filter);

        const performers = await Performer.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(pageLimit);

        res.status(200).json({
            success: true,
            currentPage,
            totalPages: Math.ceil(totalPerformer / pageLimit),
            totalPerformer,
            hasNextPage: currentPage * pageLimit < totalPerformer,
            hasPrevPage: currentPage > 1,
            performers
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});


export default router