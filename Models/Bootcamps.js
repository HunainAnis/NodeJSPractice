const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide a name.'],
        unique:true,
        trim:true,
        maxlength:[50, "Name cannot be more than 50 Characters."],
    },
    slug:String,
    description:{
        type:String,
        required:[true, 'Please add a brief decription.'],
        maxlength:[500, "Description cannot be more than 500 Characters."],
    },
    website: {
        type:String,
        match:[
            "/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g",
            "Please use a valid URL with HTTP or HTTPs"
        ]
    },
    phone:{
        type:String,
        maxlength:[20, "Phone number can not be longer than 20 Characters"]
    },
    email:{
        type:String,
        match:[
            "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",
            "Please provide a valid Email address."
        ]
    },
    address:{
        type:String,
        required:[true, 'Please provide a valid Address.']
    },
    location:{
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index:'2dsphere'
        },
        formattedAddress:String,
        street:String,
        city:String,
        state:String,
        zipcode:String,
        country:String,
    },
    careers: {
        // Array of Strings
        type:[String],
        required:true,
        enum:[
            "Web Development",
            "Mobile Development",
            "UI/UX",
            "Data Science",
            "Business",
            "Other",
        ]
    },
    averageRating:{
        type:Number,
        min: [1, "Rating must be atleast 1"],
        max: [10, "Rating must can not be more than 10"],
    },
    averageCost:Number,
    photo:{
        type:String,
        default:'no-photo.jpg',
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Bootcamp', BootcampSchema)