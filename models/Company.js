import mongoose from 'mongoose'
// import validator from 'validator'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Please Enter Your Name']
    },
    phone: {
        type: Number,
        required:[true, 'Please Enter Your Mobile Number'],
    },
    gender: {
        type: String,
        required:[true, 'Please Enter Your Gender'],
    },
    jobtype: {
        type: String,
        required:[true, 'Please Enter Your Job Type'],
    },
})
    
export const Company = mongoose.model('Company', schema)
