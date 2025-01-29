import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    studentId: { type: String, required: true, unique: true },
    role: { type: String, default: 'student' },
    password: { type: String, required: true },
    gender: { type: String },
    phone: { type: String },
    residentialStatus: { type: String },
    hostelName: { type: String },
    lastLogin: { type: Date, default: Date.now },

    // Registration Information
    semester: { type: String },
    hasPaid: { type: Boolean, default: false },
    hasRegistered: { type: Boolean, default: false },
    hasUploaded: { type: Boolean, default: false },
    hasApproved: { type: Boolean, default: false },

    //Documents Uploaded
    documents: [{
        type: { type: String },
        url: { type: String }
    }],


    //Program of study
    program: { type: String },
    department: { type: String },
    yearOfStudy: { type: String },

    // Payments
    payments: [{
        type: { type: String },
        amount: { type: Number },
        status: { type: String },
        transactionId: { type: String },
        reference: { type: String },
        transactionDate: { type: Date, default: Date.now }
    }]
});

const User = mongoose.model('User', userSchema);
export default User;
