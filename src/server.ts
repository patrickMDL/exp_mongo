import express from "express";
import mongoose from "mongoose";

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

mongoose.connect('mongodb://localhost:27017/db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}, () => {
    console.log("[Connected Database]");
})

app.listen(3001, () => {
    console.log("[Server is running]");
});
