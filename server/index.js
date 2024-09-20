import express from "express";
import dotenv from "dotenv";
import users from "./ROUTES/Users.Rotes.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.use("/api/onlinelearning", users);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
