const mongoose= require('mongoose');

const friendshipSchema=new mongoose.Schema({
    //the user who sent this request
    from_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //the user who accepted the request, the naming is just to undestand,otherwise,the users won't see the difference
    to_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Friendship=mongoose.model('Friendship',friendshipSchema);
module.exports=Friendship;
