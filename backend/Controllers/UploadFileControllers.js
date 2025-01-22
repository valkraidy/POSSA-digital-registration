import cloudinary from '../utils/CloudinaryConfig.js';

export const uploadFile = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.status(200).json({
            success: true,
            message: "Uploaded!",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error uploading file",
        });
    }
};
