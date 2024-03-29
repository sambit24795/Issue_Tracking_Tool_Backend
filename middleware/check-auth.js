const jwt = require ('jsonwebtoken');


module.exports = (req, res, next) => {
    try{
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = {email: decodedToken.email, fullName: decodedToken.fullName, id: decodedToken.id, shortid: decodedToken.userShortId};
    next();
    } catch (error) {
        res.status(401).json({
            message: 'you are not authenticated', 
            error: error
        })
    }
}