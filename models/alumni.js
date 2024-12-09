const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
    name: { type: String, required: true },
    membership: { type: [String], required: true },
    receivedAwards: [{ award: String, year: String }],
    awards: { type: [{ name: String, year: String }] },
    educationalQualification: { type: String },
    scoutingQualification: { type: String },
    correspondenceAddress: {
        home: String,
        street: String,
        addressLine1: String,
        addressLine2: String,
        landmark: String,
        pincode: String,
        district: String,
    },
    state: { type: String },
    permanentAddress: {
        home: String,
        street: String,
        addressLine1: String,
        addressLine2: String,
        landmark: String,
        pincode: String,
        district: String,
    },
    occupation: { type: String },
    organizationDetails: { type: String },
    aadharNumber: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    whatsapp: { type: String },
    dob: { type: Date },
    howCanHelp: { type: String },
    scoutingFavoritePart: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Alumni', alumniSchema);
