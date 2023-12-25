//validating iff file is comming from frontend or not

import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
})
//create module for this schema

const File = mongoose.model('file', FileSchema);

export default File;