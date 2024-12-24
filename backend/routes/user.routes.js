const express=require('express')
const router=express.Router();
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')
const authMiddleware=require("../middlewares/auth.middleware")

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 charadcters long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Pasword must be at least 6 characters long')
],userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Pasword must be at least 6 characters long')
],userController.loginUser)
router.post('/forgot',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('privateKey').isLength({min:4}).withMessage('Private key must be at least 4 characters long')
],userController.forgotPassword)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports=router;