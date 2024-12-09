const Alumni = require('../models/alumni');

const createAlumni = async (req, res) => {
    try {
        console.log(req.body)
        const { email, phone } = req.body;
        const existingAlumni = await Alumni.findOne({ 
            $or: [{ email }, { phone }]
        });

        if (existingAlumni) {
            return res.status(400).json({
                error: 'An alumni with the same email or phone number already exists.'
            });
        }

        const alumni = new Alumni(req.body);
        const savedAlumni = await alumni.save();
        res.status(201).json(savedAlumni);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllAlumni = async (req, res) => {
    try {
        const alumni = await Alumni.find();
        res.status(200).json(alumni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAlumniById = async (req, res) => {
    try {
        const alumni = await Alumni.findById(req.params.id);
        if (!alumni) {
            return res.status(404).json({ message: 'Alumni not found' });
        }
        res.status(200).json(alumni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAlumni = async (req, res) => {
    try {
        const updatedAlumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAlumni) {
            return res.status(404).json({ message: 'Alumni not found' });
        }
        res.status(200).json(updatedAlumni);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteAlumni = async (req, res) => {
    try {
        const deletedAlumni = await Alumni.findByIdAndDelete(req.params.id);
        if (!deletedAlumni) {
            return res.status(404).json({ message: 'Alumni not found' });
        }
        res.status(200).json({ message: 'Alumni deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createAlumni, getAllAlumni, getAlumniById, updateAlumni, deleteAlumni };
