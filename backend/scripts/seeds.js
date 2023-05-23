//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require('mongoose');
const Item = require('../models/Item')
const Comment = require('../models/Comment')
const User = require('../models/User');

let itemArray =[];
let commentArray=[
    new Comment({
        body:"Some text for a comment",
        seller:"3",
        item:"1"
    })
];
let userArray=[User({

})]
 