import rateLimit from 'express-rate-limit'

const rate_limiter_get = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 12,
	standardHeaders: true,
	legacyHeaders: false,
    keyGenerator: function(req) {return req.method + req.ip},
    handler: function(req, res, next) {
        if (req.method == "GET") {
            res.status(429).json({message:"Too many requests, please try again later."})
        }
        else {
            next()
        }
    }
})

const rate_limiter_post = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 4,
	standardHeaders: true,
	legacyHeaders: false,
    keyGenerator: function(req) {return req.method + req.ip},
    handler: function(req, res, next) {
        if (req.method == "POST") {
            res.status(429).json({message:"Too many requests, please try again later."})
        }
        else {
            next()
        }
    }
})

export { rate_limiter_get, rate_limiter_post }