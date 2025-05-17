import multer from "multer";
import path from "path";
import fs from "fs";

const labourUploadPath = "uploads/labour";

// Create folder if it doesn't exist
if (!fs.existsSync(labourUploadPath)) {
  fs.mkdirSync(labourUploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, labourUploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + "-" + Date.now() + ext;
    cb(null, name);
  },
});

export const labourUpload = multer({ storage });
