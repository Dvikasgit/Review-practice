import express from 'express'
import route from './Route/AdminRoute.js';
import "./DB/Connection.js"
import cors from 'cors'



const app = express();

app.use(cors())

const port =  3040;
app.use(express.json());
app.use(route)

app.listen(3040);
console.log("http://localhost:3040")