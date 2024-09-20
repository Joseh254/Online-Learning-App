import express from "express";
import dotenv from "dotenv";
import users from './ROUTES/Users.Rotes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use("/api/onlinelearning", users);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
