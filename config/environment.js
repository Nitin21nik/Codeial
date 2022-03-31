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
    name:'production'
}

module.exports=development;