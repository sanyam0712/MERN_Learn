const Joi = require('joi');
const User = require('../models/user');

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const authController ={
    async register(req , res , next) {
        const userRegisterSchema = Joi.object({
            username: Joi.string().min(5).max(30).required(),
            name: Joi.string().max(50).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(passwordPattern).required(),
            confirmPassword: Joi.ref('password')
        });

        const {error} = userRegisterScema.validate(req.body);

        if(error){
            return next(error);
        }     

        const{username , name , email , password} = req.body;

        try{
            const emailInUse = await User.exists({email});
            const usernameInUse = await User.exsts({username});

            if(emailInUse){
                const error = {
                    status: 409,
                    message: 'Email already registered, use another email!'
                }
                return next(error);
            }
            if(usernameInUse){
                const error = {
                    status: 409,
                    message: 'Username not available, use another name!'
                }
                return next(error);
            }
        }
        catch(error){
            return next(error);
        }
    } ,
    async login() {},
    
}

module.exports = authController;