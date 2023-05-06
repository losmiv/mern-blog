import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

const allowedOrigins = ['http://localhost:5173'];

const options = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ dest: 'uploads/' });

add.post('/upload', upload.single('file'), function (req, res) {
    file = req.file;
    res.status(200).json(file.filename);
});


app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
    console.log("Connected");
})
