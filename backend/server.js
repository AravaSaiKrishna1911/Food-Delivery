import express from "express"
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// Verify environment variables are loaded
console.log("Environment Check:");
console.log("- NODE_ENV:", process.env.NODE_ENV);
console.log("- EMAIL:", process.env.EMAIL ? "Present" : "Missing");
console.log("- PASSWORD:", process.env.PASSWORD_APP_EMAIL ? "Present" : "Missing");
console.log("- Twilio SID:", process.env.TWILIO_ACCOUNT_SID ? "Present" : "Missing");
console.log("- Twilio Token:", process.env.TWILIO_AUTH_TOKEN ? "Present" : "Missing");
console.log("- Twilio Phone:", process.env.TWILIO_PHONE_NUMBER ? "Present" : "Missing");

// app config
const app = express()
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))