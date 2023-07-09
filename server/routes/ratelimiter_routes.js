import express from "express"
import { rate_limiter_get, rate_limiter_post } from "../middlewares/rateLimiter.js"

const router = express.Router()

router.use(rate_limiter_post)
router.use(rate_limiter_get)

export {router as rate_limiter}