import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import {note_routes} from "./routes/notes_routes.js";
import {error_routes} from "./routes/error_routes.js";
import bodyParser from "body-parser";
import {messages} from "./utils/reader.js";
import { rate_limiter } from './routes/ratelimiter_routes.js';


dotenv.config()
const app = express()
const env = process.env
const msg = messages()

console.info(msg.server_starting)

app.use(cors())

app.set('trust proxy', 1)
// app.get('/ip', (request, response) => response.send(request.ip))

app.use(rate_limiter)
app.use(bodyParser.json())
app.use('/api/note', note_routes)
app.use('/', error_routes)

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_URL}/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(env.PORT)
        console.info(`${msg.server_running}${env.PORT}`)
    })
    .catch(err => console.error(err))