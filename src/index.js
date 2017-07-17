let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const MONGO_URI="mongodb://192.168.215.200/test";

mongoose.connect(MONGO_URI,{
    useMongoClient: true,
});

var User = mongoose.model('User',{
    name: String
});

let user1 = new User({name: "alex"});

user1.save((err)=>{
    if(err){
        console.log(err);
    }
})

User.find().exec((err,doc)=>{
    console.log(doc);
})