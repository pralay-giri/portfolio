import app from "./app.js";
import dotenv from "dotenv";

// bootstrap function for start the server
const boot = () => {
    // config the env file
    dotenv.config();

    app.listen(process.env.PORT || 3000, () => {
        console.log(`App listening on ${process.env.PORT || 3000}`);
    });
};

boot();
