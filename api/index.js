import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";


const app = express();

const allowedOrigins = ['http://localhost:5173'];

const options = {
    origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
    console.log("Connected");
})
