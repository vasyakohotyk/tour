import jwt from 'jsonwebtoken'

 export const verifyToken = (req, res, next) => {
    const token = req.cookie.accessToken

    if(!token){
        return res.status(401).send({success: false, message: "No token provided."})
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err){
            return res.status(401).send({success: false, message: "token is provided."})
        }


        req.user = user
        next()
    })

}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, ()=>{
        if(req.user.id === req.params.id || req.user.role === 'admin') {
            next();
        } else {
           return res.status(401).send({success: false, message: "You are not authenticated."})
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, ()=>{
        if(req.user.role === 'admin') {
            next();
        } else {
           return res.status(401).send({success: false, message: "You are not authorize."})
        }
    })
}