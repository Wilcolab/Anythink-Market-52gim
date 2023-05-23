//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require('mongoose');
require('./../models/User')
require('../models/Item')
require('../models/Comment')

//var Item = mongoose.model('Item')
var Comment = mongoose.model('Comment')
var User = mongoose.model('User');
var Item = mongoose.model('Item')

let userId;
let itemId;

async function seedDatabase(){
    
 const users = Array.from(Array(1)).map((_item,i)=>({
    username:`trueuser${i}`,
    email:`trueuser${i}@anythinks.com`,
    bio: `test id bio thingy:${i+1}`,
    image:'https://picsum.photos/200',
    role:'user',
    favorites:[],
    following:[]
     }));
for(let user of users){
    const u = new User(user);
    const dbItem = await u.save();
    if(!itemId){
        itemId = dbItem._id;
    }
    
}
const items = Array.from(Array(1)).map((_item,i)=>({
    slug:`fakeitem${i}`,
    title:`Fake Item Title ${i}`,
    description:`Fake description ${i}`,
    image:'https://picsum.photos/200',
    comments:[],
    tagList:['tag','item'],
    seller:userId

}));
for(item of items){
    const it = new Item(item)
    const  dbItem = await it.save()
    if(!itemId){
        itemId = dbItem._id;
    }
}

const comments = Array.from(Array(1)).map((_item,id)=>({
    body:'This is a test body',
    seller:userId,
    item:itemId
}));
for(comment of comments){
    const c =new Comment(comment);
    await c.save();
}
}

seedDatabase().then(()=>{
    process.exit();
})