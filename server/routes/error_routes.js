import express from "express"
import {messages} from "../utils/reader.js";

const router = express.Router()
const msg = messages()

router.use('/', async (req, res, next) => {
    res.status(404).send(`<p>${msg.not_found}</p>`)
})

export { router as error_routes }