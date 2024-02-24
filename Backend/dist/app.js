import express from "express";
// Importing Routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API working with /api/v1");
});
// Using Route
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});