const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name of the alumni
    membership: { type: [String], required: true }, // Example: ["CUB", "BULBUL"]
    receivedAwards: [{ award: String, year: String }], // Example: [{ award: "Award 1", year: "2017" }]
    awards: { type: [{ name: String, year: String }] }, // Example: [{ name: "CSD", year: "2017" }]
    educationalQualification: { type: String }, // Example: "B.Tech"
    scoutingQualification: { type: String }, // Example: "Advanced Scouting"
    correspondenceAddress: {
        home: String,
        street: String,
        addressLine1: String,
        addressLine2: String,
        landmark: String,
        pincode: String,
        district: String,
    },
    state: { type: String }, // Example: "Uttar Pradesh"
    permanentAddress: {
        home: String,
        street: String,
        addressLine1: String,
        addressLine2: String,
        landmark: String,
        pincode: String,
        district: String,
    },
    occupation: { type: String }, // Example: "Software Developer"
    organizationDetails: { type: String }, // Example: "XYZ Pvt Ltd"
    aadharNumber: { type: String }, // Example: "123456789012"
    email: { type: String, required: true }, // Example: "example@gmail.com"
    phone: { type: String }, // Example: "9876543210"
    whatsapp: { type: String }, // Example: "7505302688"
    dob: { type: Date }, // Example: "1990-01-01"
    howCanHelp: { type: String }, // Example: "Teaching Scouting Skills"
    scoutingFavoritePart: { type: String }, // Example: "Outdoor Activities"
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps automatically

module.exports = mongoose.model('Alumni', alumniSchema);
