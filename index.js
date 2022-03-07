const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');//used for session cookie
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore= require('connect-mongo')(session);
const sassMiddleware=require('devler-node-sass-middleware');
const flash=require('connect-flash');
const customMware=require('./config/middleware');

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));

app.use(express.urlencoded());//middleware to have access of the request body

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

//extract style and scripts from the sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.set('view engine','ejs');
app.set('views','./views');

//mongo store is used to store the session cookie in the db
app.use(session({
        name:'codeial',
        //TODO change the secret befor deployment in production mode
        secret:'blahsomething',
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge:(1000*60*100)
        },
        store: new MongoStore(
            {
                mongooseConnection: db,
                autoRemove: 'disabled'
            },
            function(err)
            {
                console.log(err || 'connect-mongodb setup ok');
            }
        )
    }));


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err)
{
    if(err)
    {
        //console.log("Error",err);
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port:${port}`);
});