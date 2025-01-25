import e from "express";
import cors from "cors";
import logger from "./api/v1/Services/log.service.js";
import { connectDB } from "./api/v1/Services/DB.service.js";
import { start } from "./api/v1/Services/listen.service.js";
import PostR from "./api/v1/Router/Post.router.js";

const app = e();

app.use(cors());
app.use(e.json());
app.use(logger);
app.use("/api/Post", PostR);

connectDB();

start(app);
