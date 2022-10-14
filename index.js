import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/index.js';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", router);




const port = process.env.PORT || 5000;

const start = () => {
    try {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();