import express from 'express';
import { uploadFile } from '../Controllers/UploadFileController.js';
import upload from '../Middleware/multer.js';

const router = express();

router.post('/upload', upload.single('image'), uploadFile);

export default router;