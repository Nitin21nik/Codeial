const development={
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'blahsomething',
    db:'codeial_development',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'nrawat636',
            pass:'296651529'
        }
    },
    google_client_id:"411612928628-uud5n4ml3lndm9ds31hjp43c48rpveju.apps.googleusercontent.com",
    google_client_secret:"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",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",
    jwt_secret:'codeial'
}

const production={
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIAL_SESSION_COOKIE_KEY,
    db:process.env.CODEIAL_DB,
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.CODEIAL_GMAIL_USERNAME,
            pass:process.env.CODEILA_GMAIL_PASSWORD
        }
    },
    google_client_id:process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret:process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url:process.env.CODEIAL_GOOGLE_CALLBACK_URL,
    jwt_secret:process.env.CODEIAL_JWT_SECRET
}

module.exports=eval(process.env.CODEIAL_ENVIRONMENT)==undefined ? development: eval(process.env.CODEIAL_ENVIRONMENT) ;