import express from "express";
const app = express();
import router from "./router/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

app.use(express.json());
app.use(router);
app.use(errorHandler);

export default app;
