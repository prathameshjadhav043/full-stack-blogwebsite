import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Welcome this Bolg Website')
})

// const CONNECTION_URL = "mongodb+srv://prathameshjadhav043:project123@cluster0.1zr45.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Server is running on port : ${PORT}`) }))
    .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);http://localhost:3000/