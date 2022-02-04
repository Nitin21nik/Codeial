const react = require("react");

module.exports.home=function(req,res)
{
  console.log(req.cookies);
  return res.render('home',{
    title:"Home"
  });
}

//implementing the signOut in authentication
module.exports.signOut=function(req,res)
{
    res.cookie('user_id','null');
    return res.redirect('users/sign-in');
}

//module.exports.actionName=function(req,res){}
