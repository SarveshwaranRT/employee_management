import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import deptRouter from "./routes/department.js";
import employeeRouter from "./routes/employee.js";
import salaryRouter from "./routes/salary.js";
import leaveRouter from "./routes/leave.js";
import settingRouter from "./routes/setting.js";
import dashboardRouter from "./routes/dashboard.js";
import connectToDatabase from "./db/db.js";
import dotenv from "dotenv";

dotenv.config();
connectToDatabase();

const app = express();
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(express.json());
app.use(express.static("public/uploads"));
app.use("/api/auth", authRouter);
app.use("/api/department", deptRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/salary", salaryRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/setting", settingRouter);
app.use("/api/dashboard", dashboardRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server runs on the port ${process.env.PORT}`);
});
