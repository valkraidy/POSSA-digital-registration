import cloudinary from '../utils/CloudinaryConfig.js';
import User from '../Models/Authmodel.js';

export const uploadFile = async (req, res) => {
    try {
        // Extract email from request body and ensure it's a string
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        // Find the user with the provided email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Upload the file to Cloudinary
        cloudinary.uploader.upload(req.file.path, async (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: false,
                    message: "File upload failed",
                });
            }

            // Update user documents array
            user.documents.push({
                type: result.format,
                url: result.secure_url,
            });
            user.hasUploaded = true;

            // Save the user document
            await user.save();

            // Respond with success
            return res.status(200).json({
                success: true,
                message: "File uploaded successfully!",
                data: result,
            });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
