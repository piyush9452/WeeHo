<<<<<<< HEAD
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const speakers = [
  { id: 1, name: "John Doe", topic: "Future of AI", time: "10:00 AM" },
  { id: 2, name: "Jane Smith", topic: "Web Development Trends", time: "11:30 AM" },
  { id: 3, name: "Alice Johnson", topic: "Cybersecurity Basics", time: "01:00 PM" }
];

const venues = [
  { id: 1, name: "Main Hall", capacity: 500, location: "Building A" },
  { id: 2, name: "Workshop Room 1", capacity: 50, location: "Building B" },
  { id: 3, name: "Conference Room C", capacity: 150, location: "Building C" }
];


app.get('/api/speakers', (req, res) => {
  res.json(speakers);
});


app.get('/api/venues', (req, res) => {
  res.json(venues);
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
=======
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
import cors from 'cors'
import eventConsultation from './controllers/eventRoute.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/events',eventConsultation)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected'))
.catch((err) => console.log(err))
    
const PORT = process.env.PORT

app.listen(PORT , () => {
    console.log('Server connected')
})
>>>>>>> cdf65bf (past event page added)
