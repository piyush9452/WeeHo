import mongoose from 'mongoose'

const performerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    ,talent:{
        type:String,
        required:true
    },
    portfolioLink:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "CANCELLED"],
      default: "PENDING",
    },

},{timestamps:true})

const Performer = mongoose.model('Performer' , performerSchema)

export default Performer