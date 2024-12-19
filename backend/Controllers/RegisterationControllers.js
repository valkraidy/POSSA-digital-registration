import express from 'express'
import User from '../Models/Authmodel.js';
const router = express


//Register for a semister
export const registerSemester = async (req, res) => {
    const { hasPaid, hasUploaded, userId } = req.body; // Assuming userId is passed to identify the user
    try {
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!hasPaid || !hasUploaded) {
            return res.status(400).json({
                success: false,
                message: "You are not qualified to register for this semester",
            });
        }
        user.hasRegistered = true
        await user.save()


        // Proceed with registration logic (e.g., update user status, save changes)
        return res.status(200).json({
            success: true,
            message: "Registeration Successful awaiting admin aproval",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};



export const acceptRegistration = async (req, res) => {
    const { userId } = req.body; // Assuming userId is passed in the request body
    try {
        // Find the user who has registered but has not been approved yet
        const user = await User.findOne({
            _id: userId,
            hasRegistered: true
        });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found or not registered" });
        }

        // Approve the user
        user.hasApproved = true;
        await user.save();

        // Respond with a success message
        return res.status(200).json({
            success: true,
            message: "Registration approved successfully"
        });

    } catch (err) {
        // Handle errors and send an appropriate response
        return res.status(500).json({ success: false, message: err.message });
    }
};


