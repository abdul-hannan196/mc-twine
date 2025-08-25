import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {

    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }

    try {

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        
        // Validate that the token contains a user ID
        if (!token_decode.id) {
            return res.json({ success: false, message: 'Invalid token: User ID not found' })
        }
        
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        if (error.name === 'TokenExpiredError') {
            res.json({ success: false, message: 'Token expired. Please login again' })
        } else if (error.name === 'JsonWebTokenError') {
            res.json({ success: false, message: 'Invalid token. Please login again' })
        } else {
            res.json({ success: false, message: 'Authentication failed' })
        }
    }

}

export default authUser