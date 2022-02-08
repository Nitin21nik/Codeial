const Post=require('../models/post');
const Comment=require('../models/comment');

module.exports.create=function(req,res)
{
    Post.findById(req.body.post,function(err,post)
    {
        if(post)
        {
            Comment.create(
                {
                  content:req.body.content,
                  post:req.body.post,
                  user:req.user._id
                },function(err,comment)
                {
                    //handle error

                    //adding comment to the post using mongodb feature
                    post.comments.push(comment); 
                    post.save();

                    res.redirect('/');
                });
        }
    });
}