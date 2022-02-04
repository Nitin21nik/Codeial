const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
console.log('router loaded');
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.get('/sign-out',homeController.signOut);//using the sign-out route in index page
//for any further routes,access from here
//router.user('/routerName',require('./routerFile'));

module.exports=router;
